export type Content = {
    raw: string
    body?: string
}

export type Page = {
    date: string
    id: string
    year: number
    issue: number
    page: number
    count: number
    content?: Content
}
