<script lang="ts">
import Capsule from "$lib/components/micro/Capsule.svelte"
import Card from "$lib/components/micro/Card.svelte"
import Comment from "$lib/components/micro/Comment.svelte";
    
    interface Ingredient {
        name : string,
        path : string,
        category? : string
    }

    interface Tag {
        title : string,
        amount : number
    }
    interface Comment {
        text : string,
        score : number,
        username : string
    }

    let totalScore : number | null = null 
    $: totalScore = comments.map( (comment) => comment.score).reduce( (last, current) => last + current)

    // Edit Here
    let ingredients : Ingredient[]  = [{
        name : 'Singha',
        path : "/liquors/singha.png"
    },{
        name : 'Singha',
        path : "/liquors/singha.png"
    },{
        name : 'Singha',
        path : "/liquors/singha.png"
    }]
    let tags : Tag[] = [{
        title : "Daredevil",
        amount : 3
    },
    {
        title : "Pure Shit",
        amount : 1
    }
]
    let comments : Comment[] = [
        {
            username : "Supratouch Suwatno",
            score : 3,
            text : "Pretty shit not gonna lie"
        },
        {
            username : "Supratouch Suwatno",
            score : 3,
            text : "Pretty shit not gonna lie"
        },
        {
            username : "Supratouch Suwatno",
            score : 3,
            text : "Pretty shit not gonna lie"
        },
    ]

</script>

<div class="min-h-screen w-full bg-white flex gap-x-12 mt-12 px-8 py-8">
    <div class="w-3/5 ">
        <h1 class="text-4xl font-semibold text-black">
            {
                ingredients.map( (drink) => drink.name).join(' + ')
            }
        </h1>
        <div class="my-6 flex gap-x-2 flex-wrap">
            {#each tags as tag}
                <Capsule title={tag.title} amount={tag.amount} />
            {/each}
        </div>
        <div class="grid grid-cols-2 gap-x-8 gap-y-8">
            {#each ingredients as ingredient}
                <Card name={ingredient.name} path={ingredient.path}  />
            {/each}
        </div>
    </div>
    <!-- Review -->
    <div class="mt-28 w-2/5 flex flex-col gap-y-6">
        <div class="flex flex-col gap-y-2">
            <h1 class="text-black font-semibold ">
                Ratings & Reviews
            </h1>
            {#if totalScore && comments}
            <div class="w-full flex items-center gap-x-3 relative">
                <h1 class="text-7xl font-bold text-gray-600">
                    {
                       (totalScore / comments.length)
                    }
                </h1>
                <span class="font-semibold text-gray-600">
                    out of 5
                </span>
                <span class="right-0 bottom-0 absolute text-gray-500 font-medium">{comments.length} Rating(s)</span>
            </div>
            {/if}
        </div>
        <div class="flex flex-col gap-y-2">
            <h1 class="text-black font-semibold ">
                Comments
            </h1>
            {#each comments as comment}
                <Comment points={comment.score} text={comment.text} username={comment.username} />
            {/each}
        </div>
    </div>
</div>