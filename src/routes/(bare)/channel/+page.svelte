<script lang="ts">
    import type { Topic } from '$lib/types'
    import Card from './Card.svelte'

    export let data: {topics: Topic[]}
    
    const { topics } = data

</script>

<div class="w-75 d-flex flex-wrap justify-content-between gap-5 mt-5">
  {#each topics as {body, key} }
    <Card {body} {key} />
  {/each}
</div>
