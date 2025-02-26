import {PUBLIC_CALENDAR_START} from '$env/static/public'
import { redirect } from '@sveltejs/kit'

export const load = async () => {
    throw redirect(302, `/view/${PUBLIC_CALENDAR_START}`)
}
