<script lang="ts">
import { goto } from "$app/navigation";

import type { IIngredient } from "$lib/db/ingredients";



    interface IPost {
        ingredients : IIngredient[],
        post_by : string,
        ref_id: string
    }

    // Edit here
    let Posts : IPost[] = [{
        ingredients : [
            {
                name : "Singha",
                category: "Beer",
                is_allowed: true,
                image_path: "/liquor/singha.png"
            },
            {
                name : "Soju",
                category: "Beer",
                is_allowed: true,
                image_path: "/liquor/singha.png"
            },
            {
                name : "Vodka",
                category: "Beer",
                is_allowed: true,
                image_path: "/liquor/singha.png"
            }
        ],
        post_by : "Supratouch",
        ref_id : "123456"
    }]
</script>

<div class="min-h-screen w-full flex flex-col justify-start items-center pt-20 px-8 gap-y-6">
    {#each Posts as Post}
        <div on:click={ () => goto(`/view/${Post.ref_id}`)} class="cursor-pointer rounded-xl bg-gray-300 flex items-center justify-start relative w-full py-8 px-8">
            <h1 class="text-5xl font-semibold">
                {Post.ingredients.map( (ingredient) => ingredient.name).join(" + ")}
            </h1>
            <h5 class="absolute bottom-2 right-4 font-medium text-lg opacity-80">
                {
                    Post.post_by
                }
            </h5>
        </div>
    {/each}
</div>