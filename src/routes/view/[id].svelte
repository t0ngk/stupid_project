<script lang="ts" context="module">
    export async function load({ fetch, params } : loadAgrs) {
        const res = await fetch(`/api/post/${params.id}`);
        const res_comment = await fetch(`/api/comment/${params.id}`);
        const { data } = await res.json();
        const comment_raw = await res_comment.json();
        const comment = comment_raw.data;
        let getComment = comment.map((item) => {
            return {
                text: item.comment_content,
                username: item.comment_by,
                score: item.comment_rating
            }
        })
        let getingre = data.ingredients.map((item) => {
            return {
                name: item.name,
                category: item.category,
                path: item.image_path,
            }
        });
        if (getComment.length == 0) {
            getComment = [{text: "This Comment is empty", score: 0, username: "Robot"}]
        }
        if (res.ok) {
            return {
                props: {
                    ingredients: getingre,
                    comments: getComment,
                }
            };
        }
        return {
            status: res.status,
            error: new Error(res.statusText)
        };
    }
</script>

<script lang="ts">
    import Capsule from "$lib/components/micro/Capsule.svelte"
    import Card from "$lib/components/micro/Card.svelte"
    import Comment from "$lib/components/micro/Comment.svelte";
    import { page } from "$app/stores"
    import {goto} from '$app/navigation'
import type { loadAgrs } from "../comment/[id].svelte";
    
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
    export let ingredients : Ingredient[]  = []
    let tags : Tag[] = [{
        title : "Daredevil",
        amount : 3
    },
    {
        title : "Pure Shit",
        amount : 1
    }
]
    export let comments : Comment[] = [
        {text: "This is a comment", score: 2, username: "John"},
        {text: "This is a comment", score: 1, username: "John"},
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
            <div class="flex justify-between items-center">
                <h1 class="text-black font-semibold ">
                    Comments
                </h1>
                <div class="btn" on:click={() => {
                    goto(`/comment/${$page.params.id}`)
                }}>Add Comment</div>
            </div>
            {#each comments as comment}
                <Comment points={comment.score} text={comment.text} username={comment.username} />
            {/each}
        </div>
    </div>
</div>
