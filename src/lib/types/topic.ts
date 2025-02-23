export type Content = {
    raw: string
    body?: string
}

export type Topic = {
    date: string
    id: string
    year: number
    issue: number
    page: number
    content?: Content
}
