<script lang="ts">
    import Calendar from '$lib/components/calendar/ssr/index.svelte'
    import WithMenu from '$lib/components/layout/WithMenu.svelte';
    import WithAside from '$lib/components/layout/WithAside.svelte';
    import { PUBLIC_MAIN_TITLE } from '$env/static/public'
    import { items } from './menu'

    export let data: {choosen: Date}

    const { choosen } = data
    const title = PUBLIC_MAIN_TITLE
    const brand = title

</script>

<WithMenu {items} {brand} {title}>
    <WithAside>
        <div slot="aside" class="p-2">
            <h6>Выбор по дате</h6>
            <Calendar prefix="/view" {choosen} />
        </div>
        <slot />
    </WithAside>
</WithMenu>

<style lang="scss">
    h6 {
        text-align: center;
        margin: 1.5rem auto .8rem auto;
    }
</style>
