<script lang="ts">
    import Alert from "$lib/components/Alert.svelte";
    import Form from "$lib/components/Form.svelte"
    import Textarea from "$lib/components/input/Textarea.svelte"
    import Submit from "$lib/components/Submit.svelte"
    import type { Topic } from "$lib/types";
    import { oldToModern } from "$lib/util";

    export let data: Topic

    const { content, page, issue, date, id } = data
    const legend = `№${issue} за ${date} г., стр. ${page}`
    const href = `https://yandex.ru/archive/catalog/${id}/${page}`

    const header = `# ИЗВЕСТИЯ ПЕТРОГРАДСКОГО СОВЕТА 
## Рабочих депутатов

_№${issue}. ${date} года. Стр. ${page}_

`

</script>

{#if content}
    <div class="raw-and-body">
        <div class="wrap raw">
                {content.raw}
        </div> 
        <div class="wrap">
            <Form {legend}>
                <Textarea name="body" value={content.body || header + oldToModern(content.raw)} rows={30}/>
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
