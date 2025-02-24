<script lang="ts">
  import { MONTHS, year as yearStore, choosenMonth, choosenYear } from './store'

  const years = [new Date().getFullYear()]

  for(let i = 0; i < 5; i++){
      const prev = years.slice(-1)[0] - 1
      years.push(prev)
  }
</script>

<div class="btn-group width-40" role="group">
  <button type="button" 
      class="btn btn-light btn-sm dropdown-toggle" 
      data-bs-toggle="dropdown" 
      aria-expanded="false">
    <!--{MONTHS[$month]} ({$yearStore})-->
    {MONTHS[$choosenMonth]} ({$choosenYear})
  </button>
  <ul class="dropdown-menu">
    {#each years as year}
      <!-- svelte-ignore a11y-invalid-attribute -->
      <li>
        <a class="dropdown-item" href="#" on:click={() => $yearStore = year}>{year}</a>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .width-40 {
    width: 40%;
  }
</style>
