<script lang="ts">
    import Alert from "$lib/components/Alert.svelte";
    import Form from "$lib/components/Form.svelte"
    import Textarea from "$lib/components/input/Textarea.svelte"
    import Submit from "$lib/components/Submit.svelte"
    import type { Page } from "$lib/types";
    import { oldToModern } from "$lib/util";

    export let data: Page

    const { content, page, issue, date, id } = data
    const legend = `№${issue} за ${date} г., стр. ${page}`
    const href = `https://yandex.ru/archive/catalog/${id}/${page}`

    const header = `###### ИЗВЕСТИЯ ПЕТРОГРАДСКОГО СОВЕТА <br> Рабочих депутатов

_№${issue}. ${date} года. Стр. ${page}_

<hr>

=====================

`

</script>

{#if content}
    <div class="wrap">
        <Form {legend}>
            <Textarea name="body" value={content.body || header + oldToModern(content.raw)} rows={35}/>
            <input type="hidden" name="date" value={date}>
            <Submit>
                <span slot="options">
                    <a class="btn btn-primary" {href} role="button" target="_blank">На Яндексе</a>
                </span>
            </Submit>
        </Form>
    </div>
{:else}
    <Alert look="danger">Контент не найден</Alert>
{/if}

<style lang="scss">
    .wrap {
        height: 90vh;
        width: 80ch;
    }
</style>
