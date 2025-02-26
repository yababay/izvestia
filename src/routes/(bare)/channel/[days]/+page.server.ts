import { getConnection } from "$lib/server/connection"

const getPage = async (days: number) => {
    const today = new Date()
    today.setDate(today.getDate() + days)
    const iso = today.toISOString()
    const arr = /^\d\d\d\d-(\d\d-\d\d)/.exec(iso) || []
    const [ _, monthDay ] = arr
    if(!monthDay) throw 'bad day'
    const client = await getConnection()
    const pattern = `topic:*${monthDay}:*`
    const keys = await client.keys(pattern)
    return {page: days, topics: await Promise.all(keys.map(key => client.get(key)))
        .then(topics => topics.map((body, i) => ({body, key: keys[i]})))
    }
}

export const load = async ({params}) => {
    const { days } = params
    return getPage(+days)   
}

export const actions = {
    save: async ({request, params}) => {
        const data = await request.formData()
        const topic = data.get('topic')?.toString().trim()
        const key = data.get('key')?.toString().trim()
        if(!(key && topic)) throw 'no key or topic'
        const client = await getConnection()
        await client.set(key, topic)
        const [ _, date, id ] = /.*\:\d{4}\-([\d\-]+)\:(\d+)/.exec(key) || []
        if(!(date && id)) throw 'no date or id in the key'
        await client.sAdd(`approved:${date}`, +id + '')
        const { days } = params
        return getPage(+days)   
        },

    remove: async ({request, params}) => {
        const data = await request.formData()
        const key = data.get('key')?.toString().trim()
        if(!key) throw 'no key to remove'
        const client = await getConnection()
        await client.del(key)
        const { days } = params
        return getPage(+days)   
    },
}
