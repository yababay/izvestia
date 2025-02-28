<script lang="ts">
    import type { Page } from '$lib/types'
    import Article from '$lib/components/Article.svelte'
    import Pagination from '$lib/components/pagination/index.svelte'
    import Publisher from './Publisher.svelte';

    export let data: Required<Page> & {local: boolean}

    const { content, id, page, count, date, issue, year, local } = data
    const postfix = `?date=${date}`
    const prefix=`/view/${year}/${issue}`
    let { body, raw } = content
    const href = `https://yandex.ru/archive/catalog/${id}/${page}`
    const edit = `/edit/${year}/${issue}/${page}`
    const description = `«Известия…», №${issue} за ${new Date(date).toLocaleString('ru-RU', {day: 'numeric', month: 'short', year: 'numeric'})} C. ${page}.`
    const readme = body || raw
    
    raw = `# Страница еще не обработана\n\n${raw}`

</script>

<Pagination {count} current={page} {prefix} {postfix}>
    <p class="instruction ms-2">Ctrl+P - публиковать<br> Ctrl+E - редактировать</p>
</Pagination>

<Article {readme}/>

<div class="mt-3 pe-3 text-end w-100 mb-5">
    <Publisher {date} {description} {href} />
</div>

<svelte:head>
    <script src="/publish.js" defer></script>
</svelte:head>

<style lang="scss">
    .instruction {
        font-size: smaller;
        padding-bottom: .1rem;
        color: grey;
    }
</style>
