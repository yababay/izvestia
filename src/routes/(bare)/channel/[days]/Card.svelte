<script lang="ts">
    import Textarea from "$lib/components/input/Textarea.svelte"
    import Submit from "$lib/components/Submit.svelte"

    export let body: string, key: string

</script>

<div class="card">
    <div class="card-body w-100">
            <form method="post">
                <input type="hidden" name="key" value={key}>
                <Textarea name="topic" rows={10} value={body}/>
                <Submit formaction="?/save">
                    <span slot="options">
                        <button class="btn btn-primary" type="submit" formaction="?/remove">Удалить</button>
                    </span>
                </Submit>
            </form>
        </div>
    </div>

<style lang="scss">
    .card {
      width: 30%;
    }
</style>
    