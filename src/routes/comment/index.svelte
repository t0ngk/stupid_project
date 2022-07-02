<script lang="ts">
import { faFlag, faStar } from "@fortawesome/free-solid-svg-icons/index.es";

    import Fa from "svelte-fa/src/fa.svelte"
import Card from "../../components/micro/Card.svelte"
    
    interface ingredient {
        name : string,
        category : string,
        path? : string
    }

    const availableTags = [
        'Pure Shit',
        "Straight to Hell",
        "Relaxing",
        "Daredevil",
        "Must try",
        "Low %",
        "High %",
        "Deadly",
        "Challenging",
        "With Friends",
        "With Family",
        "With Children"
    ]

    let ingredients : ingredient[] = [{
        name : "Singha",
        path : "liquors/singha.png",
        category : "Beer"
    },{
        name : "Singha",
        path : "liquors/singha.png",
        category : "Beer"
    },{
        name : "Singha",
        path : "liquors/singha.png",
        category : "Beer"
    },{
        name : "Singha",
        path : "liquors/singha.png",
        category : "Beer"
    },]

    let selectedTags : string[] = []

    let comment : string = ""

    function handleSubmit () {
        
    }

</script>
<div class="w-full min-h-screen flex flex-around gap-x-16 pt-12 px-12">
    <div class="w-3/5 grid grid-cols-2 grid-rows-2 gap-x-12 gap-y-6 pt-12">
        {#each ingredients as ingredient}
            <Card name={ingredient.name} path={ingredient.path} />
        {/each}
    </div>
    <div class="w-2/5 flex flex-col items-start justify-start gap-y-4 pt-12">
        <div class="flex flex-col w-full">
            <h5>
                Stars
            </h5>
            <div class="flex justify-start items-center w-full mb-8 mt-4 text-primary cursor-pointer">
                <Fa icon={faStar} class="text-5xl" />
                <Fa icon={faStar} class="text-5xl" />
                <Fa icon={faStar} class="text-5xl" />
                <Fa icon={faStar} class="text-5xl" />
                <Fa icon={faStar} class="text-5xl" />

            </div>
        </div>
        <div>
            <h5>
                Tags
            </h5>
            <div class="mt-2 flex flex-wrap flex-start gap-x-2 gap-y-2">
                {#each availableTags as tag}
                <button on:click={ () => {
                    if (selectedTags.includes(tag)) {
                        selectedTags = [...selectedTags.filter( (_) => _ !== tag)]
                    } else {
                        selectedTags = [...selectedTags, tag]
                    }
                }} class={`${selectedTags.includes(tag) ? " rounded-full bg-primary text-white" : "rounded-full text-primary "} px-4 border-2 border-primary text-sm`}>
                    {tag.replace('_', " ")}
                </button>
                {/each}
            </div>
            <h5 class="mt-4">Comment</h5>
            <textarea bind:value={
                comment
            } class="h-32 textarea textarea-primary w-full inline-block" placeholder="Describe your creation(?) here. . ."></textarea>
        </div>
        <div class="w-full flex flex-col gap-y-4">
            <button class="grid place-items-center w-full btn btn-primary font-normal text-sm rounded-lg">
                <h5>Publish</h5>
            </button>
            <button class=" hover:bg-gray-300 grid place-items-center w-full btn bg-white border-primary border-2 font-normal text-sm rounded-lg text-primary">
                <h5>Cancel</h5>
            </button>
        </div>
        <div>

        </div>
    </div>
</div>