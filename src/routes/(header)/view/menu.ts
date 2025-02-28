export type MenuItem = {
    title: string
    href?: string
    icon?: string
    items?: MenuItems
}

export type MenuItems = MenuItem[]

export const items: MenuItems = [
    { title: 'Публикации', icon: 'megaphone-fill', href: '/channel'},
    { title: 'Канал', icon: 'telegram', href: 'https://t.me/izvestia_1917'},
]
