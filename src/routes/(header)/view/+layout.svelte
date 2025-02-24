<script lang="ts">
    import WithAside from '$lib/components/layout/WithAside.svelte'
    import Calendar from '$lib/components/calendar/ssr/index.svelte'
    import WithHeader from '$lib/components/layout/WithHeader.svelte';
    import { PUBLIC_MAIN_TITLE } from '$env/static/public'

    export let data: {choosen: Date}

    const { choosen } = data

</script>

<WithHeader>
    <h1 class="ms-5" slot="header">{PUBLIC_MAIN_TITLE}</h1>
    <WithAside >
        <div slot="aside" class="p-2">
            <h6>Выбор по дате</h6>
            <Calendar prefix="/view" {choosen} />
        </div>
        <slot />
    </WithAside>
</WithHeader>


<style lang="scss">
    h6 {
        text-align: center;
        margin: 1.5rem auto .8rem auto;
    }
</style>
