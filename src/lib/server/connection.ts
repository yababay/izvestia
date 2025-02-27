import { createClient } from 'redis'
import { REDIS_PORT } from '$env/static/private'
import type { Content, Page } from '$lib/types'

export const client = createClient({url: `redis://localhost:${REDIS_PORT}`})

export const prependZeroes = (id: number | string) => `${+id + 10000000}`.replace(/^1/, '')

export const byDate = async (date: string) => {
    const search  = `?date=${date}`
    if(/^\d{4}$/.test(date)) return `/${date}/1/1${search}`
    const arr = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date) || []
    const [ _, year, month, day ] = arr
    if(!(year && month && day)) throw 'date is not parsed'
    const verbMonth = new Date(date).toLocaleString('ru-RU', {month: 'short'}).replace('.', '')
    const client = await getConnection()
    const keys = (await client.keys(`izvestia:${year}:*`)).filter(key => /^izvestia:\d{4}:\d{3}$/.test(key))
    const verbDates = await Promise.all(keys.map(key => client.hGet(key, 'date')))
    const i = verbDates.findIndex(vd => {
        if(typeof vd !== 'string') throw 'date not found'
        const arr = vd.split(' ')
        if(arr.length !== 3) throw 'bad date'
        const [ d, m, y] = arr
        return +d === +day && +y === +year && m.startsWith(verbMonth)
    })
    const key = keys[i]
    if(!key) throw 'key not found'
    const [ __, num] = /.*\:(\d{3})$/.exec(key) || []
    const numNum = +num
    if(isNaN(numNum)) throw 'key is nan'
    return `/view/${year}/${numNum}/1${search}`
}

export const getConnection = async () => {
    if(client.isOpen) return client
    await client.connect()
    return client
}

export const getIssueKey = (year: string, num: string) => {
    const prefix = `izvestia:${year}`
    const numNum = +num
    if(numNum < 10)  return `${prefix}:00${num}`
    if(numNum < 100) return `${prefix}:0${num}`
    return `${prefix}:${num}`
}

type YearId = Pick<Page, 'date' | 'id'>

export const getPage = async (year: string, issue: string, page: string) => {
    const client = await getConnection()
    const issueKey = getIssueKey(year, issue)
    const dateId = (await client.hGetAll(issueKey)) as YearId | null
    if(!dateId) throw 'issue not found'
    const { date, id } = dateId
    const pageKey = `${issueKey}:page:${page}`
    const content = (await client.hGetAll(pageKey)) as Content | null
    if(!content) throw 'page not found'
    const count = (await client.keys(`${issueKey}:page:*`)).length
    return { content, year, issue, page, date, id, count }
}
