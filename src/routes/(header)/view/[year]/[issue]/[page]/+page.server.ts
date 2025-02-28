import { getConnection, getPage, prependZeroes } from "$lib/server/connection"

export const csr = false

export const load = async ({params, url}) => {
    const { year, issue, page } = params
    const date = url.searchParams.get('date') || ''
    const props = await getPage(year, issue, page)
    const { hostname } = url
    return { ...props, date, local: hostname === 'localhost' }
}

export const actions = {
    default: async ({params, request, url}) => {
        const { year, issue, page } = params
        const data = await request.formData()
        const body = data.get('topic')?.toString().trim()
        const date = data.get('date')?.toString().trim()
        const href = data.get('href')?.toString().trim()
        const description = data.get('description')?.toString().trim()
        if(!(body && date)) throw 'no body or date'
        const client = await getConnection()
        await client.incr('topic:count')
        const id = await client.incr('topic:count')
        const key = `topic:${date}:${prependZeroes(id)}`
        await client.set(key, `${body}\n\n[${description}](${href})`)
        const props = await getPage(year, issue, page)
        const { hostname } = url
        return { ...props, date, local: hostname === 'localhost' }
    },
}
