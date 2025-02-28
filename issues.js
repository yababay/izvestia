import fs from 'fs'
import { Builder, Browser, By } from 'selenium-webdriver'
import redis from 'redis'
import dotenv from 'dotenv'

dotenv.config()

const BROWSER = process.env.BROWSER || 'FIREFOX'
const WAIT_BETWEEN_ISSUES = +(process.env.WAIT_BETWEEN_ISSUES || 1000)
const IZVESTIA_FROM = +(process.env.IZVESTIA_FROM || 0)
const IZVESTIA_TO = +(process.env.IZVESTIA_TO || 0)

const [ _, __, year ] = process.argv
if(!year) throw 'no year'

const fn = `./issues/${year}.json`
if(!fs.existsSync(fn)) throw `no fuch file: ${fn}`
const json = fs.readFileSync(fn)
const issues = JSON.parse(json)
const found = issues.filter(({num}) => num >= IZVESTIA_FROM && num <= IZVESTIA_TO)

const client = redis.createClient({url: `redis://localhost:${process.env.REDIS_PORT || 6378}`})
await client.connect()

const driver = await new Builder().forBrowser(Browser[BROWSER]).build();
await driver.manage().setTimeouts({ implicit: 20000 })
const variateTimeout = (num = WAIT_BETWEEN_ISSUES) => Math.round(num / 2 + Math.random() * num)

const getPrefix = num => {
  const prefix = `izvestia:${year}`
  const numNum = +num
  if(numNum < 10)  return `${prefix}:00${num}`
  if(numNum < 100) return `${prefix}:0${num}`
  return `${prefix}:${num}`
}

;(async () => {
    try {
      for(const issue of found){
        const { id, date, num } = issue
        console.log(id, date, num)
        const key = getPrefix(num)
        await client.hSet(key, 'date', date)
        await client.hSet(key, 'id', id)
        let count = +(await client.hGet(key, 'pages_count') || 0)
        if(count) {
          console.log(`... there are ${count} pages under modern key`)
          continue
        }
        count = +(await client.hGet(key, 'urls_count') || 0)
        if(count) {
          console.log(`... there are ${count} pages under deprecated key`)
          await client.hSet(key, 'pages_count', count)
          await client.hDel(key, 'urls_count')
          continue
        }
        count = (await client.keys(`${key}:page:*`)).length
        if(count){
          console.log(`... there are ${count} pages already parsed`)
          await client.hSet(key, 'pages_count', count)
          continue
        }
        await driver.get(`https://yandex.ru/archive/catalog/${id}`)
        const pages = await driver.findElements(By.xpath("/html/body/div/div/div/main/div[5]/div/div[1]/div/a"))
        count = pages.length
        await client.hSet(key, 'pages_count', count)
        console.log(`... there are ${count} pages from yandex site`)
        await driver.sleep(variateTimeout())
      }
    } catch (e) {
      console.log(`Error: ${e}`)
    } finally {
      await driver.quit()
      await client.save()
      await client.quit()
    }
})()
