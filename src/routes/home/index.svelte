<script context="module">
	// @ts-ignore
	export async function load({fetch}){
		const res = await fetch('/api/ingredient.json');
		const { data } = await res.json();
		if (res.ok) {
		return {
			props: {
					ingredientlists: data
			}
		}
	}
	return {
		status: res.status,
		error: new Error(res.statusText)
	}
}
</script>

<script lang="ts">
	export let ingredientlists:any;
	import Ingredients from '$lib/components/Ingredients.svelte';
	import Hero from '$lib/components/Hero.svelte';
</script>

<div class="bg-white w-full h-auto flex flex-col justify-start items-center gap-y-4">
	<Hero />
	<Ingredients ingredients={ingredientlists}/>
</div>
