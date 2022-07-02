<script lang="ts">
    import { onMount } from "svelte";

    interface ingredient {
        _id : any,
        name : string,
        category : string 
    }


    let ingredients : ingredient[] = []
    let categories : string[] = ['Beer', 'Gin', 'Brandy', 'Whisky', 'Rum', 'Tequila', 'Vodka', 'Liqueur', 'Soju', 'Fruit_Juice', 'Cocktail_Sweetneners', 'Softdrink', 'Misc']

    let filterCategories : string[] = []

    onMount( async () => {
        const res = await fetch('/api/ingredient')
        ingredients = await res.json()

        ingredients.forEach( (ingredient) => {
            if (categories.includes(ingredient.category)) return
            categories = [...categories, ingredient.category]
        })
    })

</script>

<div class="w-full flex flex-col items-center px-20 lg:px-36">
    <!-- Title -->
    <h1 class="text-6xl font-semibold my-8">
        Ingredients
    </h1>
    <!-- Categories -->
    <div class="w-full flex flex-wrap gap-x-4 gap-y-2 mb-12">
        {#each categories as category}
            <button on:click={ () => {
                if (filterCategories.includes(category)) {
                    console.log('bruh ')
                    filterCategories = [...filterCategories.filter( (_) => _ !== category)]
                } else {
                    filterCategories = [...filterCategories, category]
                }
            }} class={`${!filterCategories.includes(category) ? "rounded-full bg-primary text-white" : "rounded-full text-primary decoration-slice line-through"} px-8 border-2 border-primary`}>
                {category.replace('_', " ")}
            </button>
        {/each}
    </div>
    <!-- Cards -->

            

</div>