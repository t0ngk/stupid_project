<script lang="ts">
import { onMount } from "svelte";


    export let name : string | null = null
    export let path : string | null = null
    let unsafe : boolean = false

    onMount( () => {
        if (localStorage.getItem('unsafe') === 'true') unsafe = true
    })

</script>

<div class="relative w-full max-w-xs aspect-square rounded-xl shadow-2xl overflow-hidden grid place-items-center">
    <img class={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${unsafe ? "" : "blur-sm"} `} src={path ?? ""} alt="">
    <div class="absolute bottom-0 left-0 right-0 py-2 px-4 bg-gray-400 opacity-80 backdrop-blur-lg flex items-center justify-start">
        <h5 class="text-white font-medium text-2xl  ">
                {name ?? "Missing name"}
        </h5>
    </div>
</div>  