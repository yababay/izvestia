import { getConnection } from "$lib/server/connection"
import { error } from "@sveltejs/kit"

const getPrefix = (year: string, num: string) => {
    const prefix = `izvestia:${year}`
    const numNum = +num
    if(numNum < 10)  return `${prefix}:00${num}`
    if(numNum < 100) return `${prefix}:0${num}`
    return `${prefix}:${num}`
}

export const load = async ({params}) => {
    const client = await getConnection()
    const { year, issue, page } = params
    const prefix = getPrefix(year, issue)
    const key = `${prefix}:page:${page}`
    const all = await client.hGetAll(key)
    if(!all) throw error(404, 'not found')
    const raw = Reflect.get(all, 'raw')
    const body = Reflect.get(all, 'body')
    const content = {raw, body}
    return { content, year, issue, page, date: '', id: '' }
}
