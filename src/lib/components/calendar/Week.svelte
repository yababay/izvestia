<script lang="ts">

    import { choosen, month } from './store'
    import './index.scss'

    export let week: Date[], today = new Date, from: boolean = true
    const prefix = from ? 'from' : 'by'

</script>

<tr>
    {#each week as day}
        <td 
            class="td-square" 
            class:td-today={day.getMonth() === today.getMonth() && day.getDate() === $choosen.getDate()}
            class:prev-month={day.getMonth() !== $month}
        >
            <a href="/archive/{prefix}-date/{day.toISOString().slice(0, 10)}" rel="external">{day.getDate()}</a>
        </td>
    {/each}
</tr>

<style lang="scss">
    td{
        height: 30px;
        a {
            color: inherit;
            text-decoration: none;
            border: 0;
            margin: 0;
            padding: 0;
        }
    }
</style>
