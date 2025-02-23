import { getConnection } from "$lib/server/connection"
import type { Content, Topic } from "$lib/types"
import { error } from "@sveltejs/kit"

export const csr = false

const getIssueKey = (year: string, num: string) => {
    const prefix = `izvestia:${year}`
    const numNum = +num
    if(numNum < 10)  return `${prefix}:00${num}`
    if(numNum < 100) return `${prefix}:0${num}`
    return `${prefix}:${num}`
}

type YearId = Pick<Topic, 'date' | 'id'>

const client = await getConnection()

const getPage = async (year: string, issue: string, page: string) => {
    const issueKey = getIssueKey(year, issue)
    const dateId = (await client.hGetAll(issueKey)) as YearId | null
    if(!dateId) throw error(404, 'issue not found')
    const { date, id } = dateId
    const pageKey = `${issueKey}:page:${page}`
    const content = (await client.hGetAll(pageKey)) as Content | null
    if(!content) throw error(404, 'page not found')
    return { content, year, issue, page, date, id }
}

export const load = async ({params}) => {
    const { year, issue, page } = params
    return await getPage(year, issue, page)
}

export const actions = {
    default: async ({params, request}) => {
        const { year, issue, page } = params
        const key = `${getIssueKey(year, issue)}:page:${page}`
        const data = await request.formData()
        const body = data.get('body')?.toString()
        if(!body) throw 'no body'
        await client.hSet(key, 'body', body)
        return await getPage(year, issue, page)
    }
}
