import { redirect } from "@sveltejs/kit"
import { PUBLIC_CALENDAR_START } from '$env/static/public'

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const { url } = event
    const { pathname } = url
    if(pathname === '/') throw redirect(307, `/view`)
    if(pathname === '/view')    throw redirect(302, `/view/${PUBLIC_CALENDAR_START}`)
    if(pathname === '/channel') throw redirect(302, '/channel/0')
	return await resolve(event)
}
