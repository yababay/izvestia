import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHANNEL, WEBHOOK } from '$env/static/private'
import { Telegram } from 'telegraf'
import { getConnection, prependZeroes } from '$lib/server/connection'
import type { ParseMode } from 'telegraf/types'

const telegram = new Telegram(TELEGRAM_BOT_TOKEN)
const options: {parse_mode: ParseMode, caption?: string, link_preview_options: {is_disabled: boolean}} = { parse_mode: 'Markdown', link_preview_options: {is_disabled: true} }

export const GET = async({ params }) => {
    const { webhook, id } = params
    if(webhook !== WEBHOOK) throw 'rejected'
    const pattern = `topic:*:${prependZeroes(id)}`
    const client = await getConnection()
    const keys = await client.keys(pattern)
    if(keys.length !== 1) throw 'strange count of keys'
    const [ key ] = keys
    const message = await client.get(key)
    if(typeof message !== 'string') throw 'bad message'
    await telegram.sendMessage(TELEGRAM_CHANNEL, message, options)
    return new Response('ok')
}
