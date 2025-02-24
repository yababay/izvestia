<script lang="ts">

    import { Calendar, CALENDAR_START, MONTHS } from './date'
    import Week from './Week.svelte'
    import Years from './Years.svelte';
    
    export let choosen: Date = CALENDAR_START, prefix: string

    const calendar = new Calendar(choosen, prefix)
    const { month, prev, next, weeks } = calendar

    const getNextMonthName = () => {
        if(month === 11) return MONTHS[0]
        return MONTHS[month + 1]
    }

    const getPrevMonthName = () => {
        if(month === 0) return MONTHS[11]
        return MONTHS[month - 1]
    }

</script>

<div class="calendar-wrap">
    <div class="w-100 calendar-pane mb-1">
        <a rel="external" href={prev} class="change-month change-month-link">« {getPrevMonthName()}</a>
        <!-- a rel="external" href={next} class="change-month">{MONTHS[month]}</a -->
        <Years {calendar} /> 
        <a rel="external" href={next} class="change-month change-month-link">{getNextMonthName()} »</a>
    </div>
    <table>
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
            {#each weeks as week}
                <Week {week} {calendar} />
            {/each}
        </tbody>
    </table>
</div>

<style lang="scss">
    .calendar-wrap {
        max-width: 400px;
        margin: .5rem;
    }
    table, .calendar-pane {
        width: 100%;
    }
    .calendar-pane {
        display: flex;
        justify-content: space-between;
    }

    .change-month {
        cursor: pointer;
        font-size: smaller;
    }

    .change-month-link {
        color: cornflowerblue
    }

    .tr-calendar td {
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
        font-family: monospace;
        font-weight: bold;
    }
</style>
