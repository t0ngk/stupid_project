<script lang="ts">

    interface ingredient {
        category : string,
        is_allow : boolean,
        name : string,
        _id : string
    }

    interface group {
        _id : any,
        name : string,
        ingredients : ingredient[]
    }


    export let ingredients : group[] = []

    export let filterCategories : string[] = []


</script>

<div class="w-full flex flex-col items-center px-20 lg:px-36">
    <!-- Title -->
    <h1 class="text-6xl font-semibold my-8">
        Ingredients
    </h1>
    <!-- Categories -->
    <div class="w-full flex flex-wrap gap-x-4 gap-y-3 mb-12">
        {#each ingredients as ingredient}
            <button on:click={() => {
                if (filterCategories.includes(ingredient._id)) {
                    filterCategories = filterCategories.filter( (category) => category !== ingredient._id)
                }else{
                    filterCategories = [...filterCategories, ingredient._id]
                }
            }} class={`${!filterCategories.includes(ingredient._id) ? "rounded-full bg-primary text-white" : "rounded-full border-2 border-primary text-primary line-through"} px-10`}>{ingredient._id.replace('_', " ")}</button>
        {/each}
        <!-- {#each categories as category}
            <button on:click={ () => {
                filteredCategories = [...filterCategories, category]
            }} class={`${filteredCategories.includes(category) ? "rounded-full bg-primary text-white" : "rounded-full border-2 border-primary text-primary"} px-10`}>
                {category}
            </button>
        {/each} -->
    </div>
    <!-- Cards -->
    <!-- {#each ingredients as g}
        <div>
            <h5>
                Beer // Category here
            </h5>
            <div class="grid grid-cols-3 gap-y-12">
                <Card name={} path={}  />
            </div>
        </div>
    {/each} -->


</div>
