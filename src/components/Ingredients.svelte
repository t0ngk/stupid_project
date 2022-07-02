<script>
import Card from "./micro/Card.svelte";

    let test = [{

    }]
</script>

<div class="w-full flex flex-col items-center px-20 lg:px-36">
    <!-- Title -->
    <h1 class="text-6xl font-semibold my-8">
        Ingredients
    </h1>
    <!-- Categories -->
    <div class="w-full flex flex-wrap gap-x-4 gap-y-6 mb-12">
        <button class="rounded-full border-2 border-primary text-primary px-10">
            Beer
        </button>
        <button class="rounded-full bg-primary text-white px-10">
            Beer
        </button>
    </div>
    <!-- Cards -->
        <div class="flex flex-col w-full gap-y-6">
            <h2 class="text-2xl font-semibold">
                Beer
            </h2>
        <div class="grid grid-cols-3 gap-x-16 px-4">
            <Card name="Singha" path={'/liquors/singha.png'} />
            <Card name="Singha" path={'/liquors/singha.png'} />
            <Card name="Singha" path={'/liquors/singha.png'} />
        </div>          
    </div>

</div>