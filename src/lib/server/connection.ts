import { createClient } from 'redis'
import { REDIS_PORT } from '$env/static/private'

export const client = createClient({url: `redis://localhost:${REDIS_PORT}`})

let isConnected = false

export const getConnection = async () => {
    if(isConnected) return client
    await client.connect()
    isConnected = true
    return client
}
