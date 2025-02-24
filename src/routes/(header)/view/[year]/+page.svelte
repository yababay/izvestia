<script lang="ts">
    import Alert from "$lib/components/Alert.svelte";

    export let data: {status: number}
    const {status} = data
</script>

<Alert>Выпуск за это число не найден.</Alert>
