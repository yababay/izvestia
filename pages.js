import fs from 'fs'
import { Builder, Browser, By } from 'selenium-webdriver'
import redis from 'redis'
import dotenv from 'dotenv'

dotenv.config()

const BROWSER = process.env.BROWSER || 'FIREFOX'
const WAIT_BETWEEN_ISSUES = +(process.env.WAIT_BETWEEN_ISSUES || 1000)
const IZVESTIA_FROM = +(process.env.IZVESTIA_FROM || 0)
const IZVESTIA_TO = +(process.env.IZVESTIA_TO || 0)
const RUN_HEADLESS = !!(process.env.RUN_HEADLESS || 0)

const [ _, __, year ] = process.argv
if(!year) throw 'no year'

const fn = `./issues/${year}.json`
if(!fs.existsSync(fn)) throw `no fuch file: ${fn}`
const json = fs.readFileSync(fn)
const issues = JSON.parse(json)
//const found = issues.filter(({num}) => num >= IZVESTIA_FROM && num <= IZVESTIA_TO)

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

const savePage = async (num, id, pg) => {
  console.log('...saving page', pg, 'of issue №', num)
  await driver.get(`https://yandex.ru/archive/catalog/${id}/${pg}`)
  const raw = await driver.findElement(By.xpath('/html/body/div/div/div/main/div[7]/div[3]/div[3]'))
  if(!raw) throw 'no such element'
  const key = `${getPrefix(num)}:page:${pg}`
  await client.hSet(key, 'raw', await raw.getText())
}

;(async () => {
    try {
      for(let i = IZVESTIA_FROM; i <= IZVESTIA_TO; i++){// const issue of found){
        const issue = issues.find(({num}) => num === i)
        if(!issue){
           console.log(`issue ${i} is not found!!!!!!`)
           continue
        }
        const { id, date, num } = issue
        console.log(id, date, num)
        const key = getPrefix(num)
        let count = +(await client.hGet(key, 'pages_count') || 0)
        if(!count) throw `no pages count for issue ${num}`
        const max = (await client.keys(`${key}:page:*`)).reduce((acc, key) => {
          const arr = /.*\:(\d+)$/.exec(key) || []
          const [ _, num ] = arr
          if(!num) throw 'bad page key'
          return Math.max(acc, +num)
        }, 0)
        if(max == count) {
          console.log(`issue ${num} is already parsed`)
          continue
        }
        await savePage(num, id, max + 1)
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
