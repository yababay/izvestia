<script lang="ts">
    import { Calendar, MONTHS, YEAR_FROM, YEAR_TO } from "./date";


  export let calendar: Calendar

  const years = [YEAR_FROM]

  for(let i = YEAR_FROM + 1; i <= YEAR_TO; i++){
      years.push(i)
  }

  const { year, month } = calendar
  const label = `${MONTHS[month]} ${year} г.`

</script>

{#if years.length > 1}
<div class="btn-group width-40" role="group">
  <button type="button" 
      class="btn btn-light btn-sm dropdown-toggle" 
      data-bs-toggle="dropdown" 
      aria-expanded="false">
    {label}
  </button>
    <ul class="dropdown-menu">
      {#each years as year}
        <li>
          <a class="dropdown-item" href={calendar.toYear(year)} rel="external">{year}</a>
        </li>
      {/each}
    </ul>
  </div>
{:else}
<span>    
  {label}
</span>
{/if}

<style lang="scss">
  .width-40 {
    width: 40%;
  }
</style>
