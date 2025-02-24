<script lang="ts">
    import type { Topic } from '$lib/types'
    import Article from '$lib/components/Article.svelte'
    import Pagination from '$lib/components/pagination/index.svelte'

    export let data: Required<Topic> & {local: boolean}

    const { content, id, page, count, date, issue, year, local } = data
    const postfix = `?date=${date}`
    const prefix=`/view/${year}/${issue}`
    let { body, raw } = content
    const href = `https://yandex.ru/archive/catalog/${id}/${page}`
    const edit = `/edit/${year}/${issue}/${page}`
    raw = `# Страница еще не обработана\n\n${raw}`

    const readme = body || raw

</script>

<Pagination {count} current={page} {prefix} {postfix}>
    <ul class="pagination">
        {#if local}
            <li class="page-item me-3 ms-5">
                <a target="_blank" href={edit}>Править</a>
            </li>
        {/if}
        <li class="page-item">
            <a {href} target="_blank">Яндекс</a>
        </li>
    </ul>
</Pagination>

<Article {readme} />
