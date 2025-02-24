import { PUBLIC_CALENDAR_START } from '$env/static/public'
import { redirect } from '@sveltejs/kit'

const CALENDAR_START = new Date(PUBLIC_CALENDAR_START)

export const csr = false

export const load = ({url}) => {
    let { pathname, searchParams } = url
    if(/.*\/\d{4}$/.test(pathname)) {
        pathname += '-01-01'
        throw redirect(302, pathname)
    }
    const arr = /.*(\d{4}-\d{2}-\d{2})$/.exec(pathname) || []
    let [ _, ymd ] = arr
    if(!ymd) ymd = searchParams.get('date') || ''
    return { choosen: new Date(ymd ? ymd : CALENDAR_START) }
}
