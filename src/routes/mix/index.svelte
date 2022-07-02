<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons/index.es';
    import { goto } from '$app/navigation';
    let num = 3
    async function mix() {
        console.log('mixxings')
        // const res = await fetch('/api/ingredient')
        // console.log(await res.json())
        goto(`/comment/${num}`)
    }
</script>

<div class="flex flex-col items-center justify-center w-full h-screen gap-y-6">
    <h5>
        Number of ingredients you desire
    </h5>
    <div class="flex flex-center items-center gap-x-2">
        <input type="number" min={2} max={4} bind:value={num} class="border-primary border-2 rounded-xl text-3xl font-medium text-center max-w-[64px] py-2">
        <div class="flex flex-col items-center justify-center">
            <div on:click={ () => {
                if (num >= 4) return
                num++
            }}>
                <Fa icon={faSortUp}></Fa>
            </div>
            <div on:click={ () => {
                if (num <= 2) return
                num--
            }}>
                <Fa icon={faSortDown}></Fa>
            </div>
        </div>
    </div>
    <button on:click={async () => {
    }} class="btn btn-primary px-36 text-white py-2 rounded-xl capitalize font-normal">
        Mix
    </button>
</div>

<style scoped>
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
</style>
