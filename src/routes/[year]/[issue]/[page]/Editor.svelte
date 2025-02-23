<script lang="ts">
    import Alert from "$lib/components/Alert.svelte";
    import Form from "$lib/components/Form.svelte"
    import Textarea from "$lib/components/input/Textarea.svelte"
    import Submit from "$lib/components/Submit.svelte"
    import type { Topic } from "$lib/types";

    export let data: Topic

    const { content, page, issue, year, date, id } = data
    const legend = `№${issue} за ${date} ${year} г., стр. ${page}`
    const href = `https://yandex.ru/archive/catalog/${id}/${page}`

</script>

{#if content}
    <div class="raw-and-body">
        <div class="wrap raw">
                {content.raw}
        </div> 
        <div class="wrap">
            <Form {legend}>
                <Textarea name="body" value={content.body || content.raw} rows={30}/>
                <input type="hidden" value={`${issue}:page:${page}`}>        
                <Submit>
                    <a class="btn btn-primary" {href} role="button" target="_blank" slot="options">На Яндексе</a>
                </Submit>
            </Form>
        </div>
    </div>
{:else}
    <Alert look="danger">Контент не найден</Alert>
{/if}

<style lang="scss">
    .raw-and-body {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
    .raw {
        overflow-y: auto;
        font-size: small;
        height: 100%;
        white-space: pre-wrap;
    }
    .wrap {
        height: 75vh;
        width: 80ch;
    }
</style>
