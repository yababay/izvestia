<script lang="ts">

    import type { Calendar } from './date';
    export let week: Date[], calendar: Calendar

    const { month, choosen } = calendar

</script>

<tr>
    {#each week as day}
        <td 
            class="td-square" 
            class:td-today={day.getMonth() === choosen.getMonth() && day.getDate() === choosen.getDate()}
            class:prev-month={day.getMonth() !== month}
        >
            <a href={calendar.pathname(day)} rel="external">{day.getDate()}</a>
        </td>
    {/each}
</tr>

<style lang="scss">
    .prev-month {
        color: silver
    }
    .td-today {
        background-color: cadetblue;
    }
    .td-square {
        cursor: pointer;
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
        font-family: monospace;

        a {
            color: inherit;
            text-decoration: none;
        }
    }
</style>
