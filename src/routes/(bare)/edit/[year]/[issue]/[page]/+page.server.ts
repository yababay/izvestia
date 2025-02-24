import { getConnection, getIssueKey, getPage } from "$lib/server/connection"

export const csr = false

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
        const client = await getConnection()
        await client.hSet(key, 'body', body)
        await client.save()
        return await getPage(year, issue, page)
    }
}
