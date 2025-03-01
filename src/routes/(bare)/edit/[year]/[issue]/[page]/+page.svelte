<script lang="ts">
    import type { Page } from '$lib/types';
    import Editor from './Editor.svelte'
    export let data: Page
    const { page, issue, date, id } = data
    const description = `«Известия…», №${issue} за ${date} г. C. ${page}.`
    const origin = `https://yandex.ru/archive/catalog/${id}/${page}`
</script>

<Editor {data} />

<svelte:head>
    <meta name="description" content={description} />
    <meta name="origin" content={origin} />
    <script src="/edit.js" defer></script>
</svelte:head>
