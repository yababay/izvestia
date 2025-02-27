import fs from 'fs'
import { Builder, Browser, By } from 'selenium-webdriver'
import redis from 'redis'
import dotenv from 'dotenv'

dotenv.config()

const IZVESTIA_FROM = +(process.env.IZVESTIA_FROM || 0)
const IZVESTIA_TO = +(process.env.IZVESTIA_TO || 0)
const WAIT_BETWEEN_PAGES = +(process.env.WAIT_BETWEEN_PAGES || 1000)
const WAIT_BETWEEN_ISSUES = +(process.env.WAIT_BETWEEN_ISSUES || 1000)
const WAIT_BETWEEN_SERIES = +(process.env.WAIT_BETWEEN_SERIES || 1000)
const ONLY_URLS = +(process.env.ONLY_URLS) === 1

const variateTimeout = num => Math.round(num / 2 + Math.random() * num)

const BROWSER = process.env.BROWSER || 'FIREFOX'

const port = +(process.env.REDIS_PORT || 6379)
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
const driver = await new Builder().forBrowser(Browser[BROWSER]).build();
const client = redis.createClient({url: `redis://localhost:${port}`})
await client.connect()

const getPrefix = num => {
  const prefix = `izvestia:${year}`
  const numNum = +num
  if(numNum < 10)  return `${prefix}:00${num}`
  if(numNum < 100) return `${prefix}:0${num}`
  return `${prefix}:${num}`
}

const savePage = async (num, url, pg) => {
  console.log('page', pg, 'of', num)
  //if(true) return
  await driver.get(`${url}/${pg}`)
  const raw = await driver.findElement(By.xpath('/html/body/div/div/div/main/div[7]/div[3]/div[3]'))
  if(!raw) throw 'no such element'
  console.log(`... page ${pg}`)
  const key = `${getPrefix(num)}:page:${pg}`
  await client.hSet(key, 'raw', await raw.getText())
  await driver.sleep(variateTimeout(WAIT_BETWEEN_PAGES)) //.manage().setTimeouts({ explicit: WAIT_BETWEEN_PAGES })
}

;(async () => {
    try {
      for(const issue of found){
        await driver.sleep(variateTimeout(WAIT_BETWEEN_ISSUES))
        const { id, date, num } = issue
        const url = `https://yandex.ru/archive/catalog/${id}`
        const key = getPrefix(num)
        if(ONLY_URLS) {
          await driver.get(url);
          const pages = await driver.findElements(By.xpath("/html/body/div/div/div/main/div[5]/div/div[1]/div/a"))
          const urls = await Promise.all(
            pages.map(page => page.getAttribute('href'))
          )
          await client.hSet(key, 'urls_count', urls.length)
          await client.hSet(key, 'date', date)
          await client.hSet(key, 'id', id)
          console.log(`there is ${urls.length} pages in issue ${num} (${date})`)
          continue
        }
        const urlsCount = await client.hGet(key, 'urls_count')
        for(let pg = 1; pg <= urlsCount; pg++) await savePage(num, url, pg)
      }
    } catch (e) {
      console.log(`Error: ${e}`)
    } finally {
      await driver.sleep(WAIT_BETWEEN_SERIES)
      await driver.quit()
      await client.save()
      await client.quit()
    }
})()
