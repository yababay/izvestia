import { getPage } from "$lib/server/connection"

export const csr = false

export const load = async ({params, url}) => {
    const { year, issue, page } = params
    const date = url.searchParams.get('date') || ''
    const props = await getPage(year, issue, page)
    const { hostname } = url
    return { ...props, date, local: hostname === 'localhost' }
}
