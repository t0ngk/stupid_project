<script context="module">
	// @ts-ignore
	export async function load({ fetch }) {
		const res = await fetch('/api/ingredient.json');
		const { data } = await res.json();
		if (res.ok) {
			return {
				props: {
					ingredientlists: data
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
    export let ingredientlists: any;
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons/index.es';
    import { goto } from '$app/navigation';
    import { selectItem } from '$lib/store';
    let num = 3
    import Ingredients from '$lib/components/Ingredients.svelte';
	let filterCategories: string[] = [];
    $: $selectItem = filterCategories;
    async function mix() {
        try {
            const res = await fetch(`/api/ingredient/${num}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                restictions: $selectItem,
            })
            })
            const ingredients = await res.json()
            const sentPost = await fetch('/api/post.json',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    ingredients: ingredients.data,
                    post_by: 'Anon',
                })
            })
            const post = await sentPost.json()
            console.log(post.data)
        goto('/comment/'+post.data.ref_id)
        }catch(e){
            console.log(e)
            alert("An fatal error has occured in the system while trying to fetch data from the backend.")  
        }
        
       
    }
</script>

<div class="flex flex-col items-center justify-center w-full h-screen gap-y-6">
    <Ingredients bind:filterCategories ingredients={ingredientlists} />
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
        mix();
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
