import fs from 'fs'
import { Builder, Browser, By } from 'selenium-webdriver'
import redis from 'redis'
import dotenv from 'dotenv'

dotenv.config()

const IZVESTIA_FROM = +(process.env.IZVESTIA_FROM || 0)
const IZVESTIA_TO = +(process.env.IZVESTIA_TO || 0)
const [ _, __, year, issue ] = process.argv

const [ from, to ] = (() => {
  const numIssue = +(!isNaN(issue) && issue || 0)
  if(!(IZVESTIA_FROM && IZVESTIA_TO) || issue) return [numIssue, numIssue]
  if(IZVESTIA_FROM > IZVESTIA_TO) throw 'bad issue limits'
  return [ IZVESTIA_FROM, IZVESTIA_TO ]
})()

if(!(year && from && to)) throw 'no year or issue limits'

const fn = `./issues/${year}.json`
if(!fs.existsSync(fn)) throw `no fuch file: ${fn}`

const json = fs.readFileSync(fn)
const issues = JSON.parse(json)
const found = issues.filter(({num}) => num >= from && num <= to)
const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
const client = redis.createClient()
await client.connect()

const getPrefix = num => {
  const prefix = `izvestia:${year}`
  const numNum = +num
  if(numNum < 10)  return `${prefix}:00${num}`
  if(numNum < 100) return `${prefix}:0${num}`
  return `${prefix}:${num}`
}

const savePage = async (num, url) => {
  const arr = /\/(\d+)$/.exec(url) || []
  const [ _, pg ] = arr
  if(!pg) return
  await driver.get(url)
  const raw = await driver.findElement(By.xpath('/html/body/div/div/div/main/div[7]/div[3]/div[3]'))
  if(!raw) throw 'no such element'
  console.log(`... page ${pg}`)
  const key = `${getPrefix(num)}:page:${pg}`
  await client.hSet(key, 'raw', await raw.getText())
}

;(async () => {
    try {
      for(const issue of found){
        const { id, date, num } = issue
        console.log(`parsing issue ${num} (${date})`)
        const url = `https://yandex.ru/archive/catalog/${id}`
        await driver.get(url);
        const pages = await driver.findElements(By.xpath("/html/body/div/div/div/main/div[5]/div/div[1]/div/a"))
        const urls = await Promise.all(
          pages.map(page => page.getAttribute('href'))
        )
        await Promise.all(urls.map(url => savePage(num, url)))
        const key = `${getPrefix(num)}:date`
        await client.set(key, date)
      }
    } catch (e) {
      console.log(`Error: ${e}`)
    } finally {
      await driver.sleep(2000)
      await driver.quit()
      await client.quit()
    }
})()
