<script lang="ts">

    import { weeks, nextMonth, prevMonth, MONTHS, month } from './store'
    import Week from './Week.svelte'
    import Years from './Years.svelte'

    export let from: boolean = true

</script>

<div class="d-flex justify-content-between w-100" role="group" aria-label="Button group with nested dropdown">
    <button type="button" class="btn btn-light btn-sm text-start width-30" on:click={prevMonth}>
        <i class="bi bi-arrow-bar-left pe-2"></i> 
        {MONTHS[$month === 0 ? 11 : ($month - 1)]}
    </button>

    <Years />

    <button type="button" class="btn btn-light btn-sm text-end width-30" on:click={nextMonth}>
            {MONTHS[$month === 11 ? 0 : ($month + 1)]} 
            <i class="bi bi-arrow-bar-right ps-2"></i> 
    </button>
</div>

<table class="w-100">
    <thead>
        <tr class="tr-calendar">
            <td>Пн</td>
            <td>Вт</td>
            <td>Ср</td>
            <td>Чт</td>
            <td>Пт</td>
            <td>Сб</td>
            <td>Вс</td>
        </tr>
    </thead>
    <tbody>
        {#each $weeks as week}
            <Week {week} {from} />
        {/each}
    </tbody>
</table>

<style lang="scss">
    .width-30 {
        width: 30%;
    }
    
    table{
        width: 100%;
        min-width: 300px;
    }

    .tr-calendar td {
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
        font-family: monospace;
        font-weight: bold;
    }
</style>
