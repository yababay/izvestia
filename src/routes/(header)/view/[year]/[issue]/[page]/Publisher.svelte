<script lang="ts">
    import Textarea from '$lib/components/input/Textarea.svelte'
    import Submit from '$lib/components/Submit.svelte'

    export let date: string, href: string, description: string
</script>

<button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#publisher">
    Публикация
</button>

<div class="modal fade" id="publisher" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <form method="post">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Подготовка к публикации</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type="hidden" name="date" value={date}>
                <input type="hidden" name="href" value={href}>
                <input type="hidden" name="description" value={description}>
                <Textarea name="topic" rows={20}/>
            </div>
            <div class="modal-footer">
                <Submit label="Создать" />
            </div>
            </form>
        </div>
    </div>
</div>
