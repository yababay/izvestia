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
    <ul class="pagination ms-5">
        {#if local}
            <li class="page-item">
                <a target="_blank" href={edit} title="Править" aria-label="Править"><i class="bi bi-pencil p-2"></i></a>
            </li>
            <li class="page-item">
                <a target="_blank" href="/channel" title="Управление каналом" aria-label="Управление каналом"><i class="bi bi-telegram p-2"></a>
            </li>
        {/if}
        <li class="page-item">
            <a {href} target="_blank" title="Источник в Яндекс-архиве" aria-label="Источник в Яндекс-архиве"><i class="bi bi-link p-2"></i></a>
        </li>
    </ul>
</Pagination>

{#if local}
    <div class="mt-3 pe-3 text-end w-100">
        <Publisher {date} {description} {href} />
    </div>
{/if}

<Article {readme}/>

<svelte:head>
    <script src="/publish.js" defer></script>
</svelte:head>
