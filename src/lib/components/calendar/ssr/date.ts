import { PUBLIC_CALENDAR_START, PUBLIC_YEAR_FROM, PUBLIC_YEAR_TO } from '$env/static/public'

const DAY_IN_MILLIS = 24 * 3600000

export const YEAR_FROM = +PUBLIC_YEAR_FROM
export const YEAR_TO = +PUBLIC_YEAR_TO
export const CALENDAR_START = new Date(PUBLIC_CALENDAR_START)

export const MONTHS = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
]

export class Calendar {

    #current: Date
    #prefix: string

    constructor(date: Date = new Date, prefix: string){
        this.#current = date
        this.#prefix = prefix
    }

    get choosen(){
        return this.#current
    }

    get year() {
        return this.#current.getFullYear()
    }

    toYear(year: number) {
        const date = new Date(this.#current)
        date.setFullYear(year)
        return this.pathname(date)
    }

    get weeks(){
        const { days } = this
        const weeks: Date[][] = []
        while(days.length) weeks.push(days.splice(0, 7))
        return weeks
    }

    pathname(date: Date){
        return `${this.#prefix}/${date.toISOString().slice(0, 10)}`
    }

    get next(){
        const { days } = this
        const date = new Date(days.slice(-1)[0].getTime() + DAY_IN_MILLIS)
        const current = new Date(this.#current).getDate()
        date.setDate(current)
        return this.pathname(date)
    }

    get prev(){
        const { days } = this
        const date = new Date(days[0].getTime() - DAY_IN_MILLIS)
        const current = new Date(this.#current).getDate()
        date.setDate(current)
        return this.pathname(date)
    }
    
    get month() {
        return this.days[15].getMonth()
    }

    get days() {
        const seed = this.#current
        const month = seed.getMonth()
        const before = [seed]
        let current = seed
        while(current.getMonth() === month) {
            current = new Date(current.getTime() - DAY_IN_MILLIS)
            before.push(current)
        }
        before.pop()
        current = before.slice(-1)[0]
        while(current.getDay() !== 1) {
            current = new Date(current.getTime() - DAY_IN_MILLIS)
            before.push(current)
        }
        current = seed
        const after = []
        while(current.getMonth() === month) {
            current = new Date(current.getTime() + 24 * 3600000)
            after.push(current)
        }
        after.pop()
        return [...before.reverse(), ...after]
    }
}
