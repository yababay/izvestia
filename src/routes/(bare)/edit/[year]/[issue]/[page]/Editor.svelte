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

    const header = `###### ИЗВЕСТИЯ ПЕТРОГРАДСКОГО СОВЕТА <br> Рабочих депутатов

_№${issue}. ${date} года. Стр. ${page}_

<hr>

`

</script>

{#if content}
    <div class="wrap">
        <Form {legend}>
            <Textarea name="body" value={content.body || header + oldToModern(content.raw)} rows={35}/>
            <Submit>
                <a class="btn btn-primary" {href} role="button" target="_blank" slot="options">На Яндексе</a>
            </Submit>
        </Form>
    </div>
{:else}
    <Alert look="danger">Контент не найден</Alert>
{/if}

<style lang="scss">
    .wrap {
        height: 95vh;
        width: 80ch;
    }
</style>
