<script lang="ts">
    import Alert from '$lib/components/Alert.svelte';
import type { Topic } from '$lib/types'
    import Card from './Card.svelte'

    export let data: {topics: Topic[], page: number}
    
    const { topics, page } = data

    const today = new Date
    today.setDate(today.getDate() + 3)
    const third = today.toLocaleString('ru-RU', {weekday: 'long'})
    today.setDate(today.getDate() + 1)
    const fourth = today.toLocaleString('ru-RU', {weekday: 'long'})
    today.setDate(today.getDate() + 1)
    const fifth = today.toLocaleString('ru-RU', {weekday: 'long'})
    today.setDate(today.getDate() + 1)
    const sixth = today.toLocaleString('ru-RU', {weekday: 'long'})
    const days = ['сегодня', 'завтра', 'послезавтра', third, fourth, fifth, sixth]

</script>

<div class="d-flex align-items-center">
  <span class="nav-header">Предстоящие публикации:&nbsp;</span>
  <ul class="pagination ms-2">
    {#each days as day, i}
      <li class="page-item" class:active={i === page}>
        <a href={`/channel/${i}`} class="page-link" rel="external">{day}</a>      
      </li>
    {/each}
  </ul>
</div>

{#if topics.length}
<div class="w-75 d-flex flex-wrap justify-content-between gap-5 mt-5">
  {#each topics as {body, key} }
    <Card {body} {key} />
  {/each}
</div>
{:else}
  <Alert look="info">Сообщения не найдены. <a href="/view" class="link-info">Подготовьте их.</a></Alert>
{/if}

<style lang="scss">
  .nav-header {
    padding-bottom: 1rem;
  }
</style>
