<script lang="ts">
import { faStar } from "@fortawesome/free-solid-svg-icons/index.es";

import Fa from "svelte-fa/src/fa.svelte";

    export let username : string = ""
    export let text : string = ""
    export let points : number = 3
</script>

<div class="bg-gray-200 rounded-xl w-full relative p-4 pt-14">
    <div class="absolute top-4 left-4 cursor-pointer flex justify-start items-center w-full text-primary">
        <div ><Fa icon={faStar} class={`text-sm ${points >= 1 ? "" : "opacity-30"}`}  /></div>
        <div ><Fa icon={faStar} class={`text-sm ${points >= 2 ? "" : "opacity-30"}`}  /></div>
        <div ><Fa icon={faStar} class={`text-sm ${points >= 3 ? "" : "opacity-30"}`}  /></div>
        <div ><Fa icon={faStar} class={`text-sm ${points >= 4 ? "" : "opacity-30"}`}  /></div>
        <div ><Fa icon={faStar} class={`text-sm ${points >= 5 ? "" : "opacity-30"}`} /></div>
    </div>
    <span class="top-3 right-4 text-black font-semibold absolute">
        {
            username ?? "LOL MISSING USERNAME"
        }
    </span>
    <p class="text-xs">
    {
        text
    }    
    </p>
</div>