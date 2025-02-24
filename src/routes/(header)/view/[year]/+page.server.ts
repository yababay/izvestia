import { byDate } from '$lib/server/connection'
import { redirect } from '@sveltejs/kit'

export const load = async ({params}) => {
    const { year } = params
    let url: string | null = null
    try {
        url = await byDate(year)
    }
    catch(err){
        console.log(err)
        return { status: 404 }
    }
    throw redirect(302, url || '/')
}
