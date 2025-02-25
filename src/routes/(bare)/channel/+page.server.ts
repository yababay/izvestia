import { getConnection } from "$lib/server/connection"

export const load = async () => {
    const client = await getConnection()
    const keys = await client.keys('topic:*')
    return {topics: await Promise.all(keys.map(key => client.get(key)))
        .then(topics => topics.map((body, i) => ({body, key: keys[i]})))
    }
}

export const actions = {
    save: async ({request}) => {
        const data = await request.formData()
        const topic = data.get('topic')?.toString().trim()
        const key = data.get('key')?.toString().trim()
        if(!(key && topic)) throw 'no key or topic'
        const client = await getConnection()
        await client.set(key, topic)
        const [ _, date, id ] = /.*\:\d{4}\-([\d\-]+)\:(\d+)/.exec(key) || []
        if(!(date && id)) throw 'no date or id in the key'
        await client.sAdd(`publish:${date}`, +id + '')
        return await load()
    },

    remove: async ({request}) => {
        const data = await request.formData()
        const key = data.get('key')?.toString().trim()
        if(!key) throw 'no key to remove'
        const client = await getConnection()
        await client.del(key)
        return await load()
    },
}
