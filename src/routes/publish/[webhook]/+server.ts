import { getConnection } from '$lib/server/connection'

export const GET = async ({fetch, url}) => {
    const client = await getConnection()
    const today = new Date().toISOString().substring(5, 10)
    const setKey = `approved:${today}`
    if(!(await client.exists(setKey))) return new Response('no approved', {status: 404})
    const members = await client.sMembers(setKey)
    if(!members.length) return new Response('no members', {status: 404})
    const fromKey = `publishing:${today}`
    const toKey = `published:${today}`
    const fromOk = await client.exists(fromKey)
    const toOk = await client.exists(toKey)
    if(!fromOk && !toOk){
        await client.lPush(fromKey, members)
        await client.expire(fromKey, 3600 * 24)
    }
    const id = await client.rPopLPush(fromKey, toKey)
    await client.expire(toKey, 3600 * 24)
    if(id){
        const { pathname } = url
        await fetch(`${pathname}/${id}`)
        return new Response('ok')
    }
    return new Response('empty')
}
