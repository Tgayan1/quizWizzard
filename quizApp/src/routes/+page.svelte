<script lang="ts">

    export let data;
</script>

{#if !(data.error)}
    {#each data.users as user}
    <p>{user.name}</p>
    {:else}
    <p>No Users!</p>
    {/each}
    {:else}
    <p class="text-red">{data.error}</p>
{/if}