import { getConnection } from '$lib/server/connection'
import type { RedisClientType } from 'redis'
import { WEBHOOK } from '$env/static/private'

export const GET = async ({fetch, url, params}) => {
    const { webhook } = params
    if(webhook !== WEBHOOK)  return new Response('rejected', {status: 401})
    const client = await getConnection() as RedisClientType
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
        await client.lPush(fromKey, members.sort())
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
