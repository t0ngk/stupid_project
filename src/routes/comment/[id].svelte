<script lang="ts" context="module">
	import mongoose, { Model } from 'mongoose';

	export interface loadAgrs {
		fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;
		params: { id: string };
	}

	export async function load({ fetch, params }: loadAgrs) {
		const res = await fetch(`/api/post/${params.id}`);
		try {
			const { data }: { data: IPost } = await res.json();
			const getingre = data.ingredients.map((item) => {
				return {
					name: item.name,
					category: item.category,
					path: item.image_path
				};
			});
			if (res.ok) {
				return {
					props: {
						ingredients: getingre
					}
				};
			}
			return {
				status: res.status,
				error: new Error(res.statusText)
			};
		} catch (e) {
			console.log(e);
			return {
				status: res.status,
				error: new Error(res.statusText)
			};
		}
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';

	import { faStar } from '@fortawesome/free-solid-svg-icons/index.es';
	import { onMount } from 'svelte';

	import Fa from 'svelte-fa/src/fa.svelte';
	import Card from '$lib/components/micro/Card.svelte';
	import type { IPost } from '$lib/db/post';
	import { goto } from '$app/navigation';

	interface ingredient {
		name: string;
		category: string;
		path?: string;
	}

	const availableTags = [
		'Pure Shit',
		'Straight to Hell',
		'Relaxing',
		'Daredevil',
		'Must try',
		'Low %',
		'High %',
		'Deadly',
		'Challenging',
		'With Friends',
		'With Family',
		'With Children'
	];

	export let ingredients: ingredient[] = [];

	let selectedTags: string[] = [];

	let comment: string = '';
	let points = 4;

	let payload: Object = {};

	async function send() {
		try {
			payload = {
				tags: selectedTags,
				comment_content: comment,
				comment_rating: points,
				comment_post_id: $page.params.id
			};
            console.log(payload);
			const res = await fetch(`/api/comment.json`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: {
                      data : JSON.stringify(payload)
				}
			});
			goto(`/view/${payload}`);
		} catch (e) {
			console.log(e);
			alert('An fatal error has occured while trying to post a comment');
		}
	}

	// onMount( async () => {
	//     const res = await fetch(`/api/ingredient.json/${$page.params.amount}`)}
	// )
</script>

<div class="bg-white w-full min-h-screen flex flex-around gap-x-16 pt-12 px-12">
	<div class="w-3/5 grid grid-cols-2 grid-rows-2 gap-x-12 gap-y-6 pt-12">
		{#each ingredients as ingredient}
			<Card name={ingredient.name} path={ingredient.path} />
		{/each}
	</div>
	<div class="w-2/5 flex flex-col items-start justify-start gap-y-4 pt-12">
		<div class="flex flex-col w-full">
			<h5>Stars</h5>
			<div class="cursor-pointer flex justify-start items-center w-full my-6 text-primary">
				<div on:click={() => (points = 1)}>
					<Fa icon={faStar} class={`text-5xl ${points >= 1 ? '' : 'opacity-30'}`} />
				</div>
				<div on:click={() => (points = 2)}>
					<Fa icon={faStar} class={`text-5xl ${points >= 2 ? '' : 'opacity-30'}`} />
				</div>
				<div on:click={() => (points = 3)}>
					<Fa icon={faStar} class={`text-5xl ${points >= 3 ? '' : 'opacity-30'}`} />
				</div>
				<div on:click={() => (points = 4)}>
					<Fa icon={faStar} class={`text-5xl ${points >= 4 ? '' : 'opacity-30'}`} />
				</div>
				<div on:click={() => (points = 5)}>
					<Fa icon={faStar} class={`text-5xl ${points >= 5 ? '' : 'opacity-30'}`} />
				</div>
			</div>
		</div>
		<div>
			<h5>Tags</h5>
			<div class="mt-2 flex flex-wrap flex-start gap-x-2 gap-y-2">
				{#each availableTags as tag}
					<button
						on:click={() => {
							if (selectedTags.includes(tag)) {
								selectedTags = [...selectedTags.filter((_) => _ !== tag)];
							} else {
								selectedTags = [...selectedTags, tag];
							}
						}}
						class={`${
							selectedTags.includes(tag)
								? ' rounded-full bg-primary text-white'
								: 'rounded-full text-primary '
						} px-4 border-2 border-primary text-sm`}
					>
						{tag.replace('_', ' ')}
					</button>
				{/each}
			</div>
			<h5 class="mt-4">Comment</h5>
			<textarea
				bind:value={comment}
				class="h-32 textarea textarea-primary w-full inline-block"
				placeholder="Describe your creation(?) here. . ."
			/>
		</div>
		<div class="w-full flex flex-col gap-y-4">
			<button
				on:click={() => {
					send();
				}}
				class="grid place-items-center w-full btn btn-primary font-normal text-sm rounded-lg"
			>
				<h5>Publish</h5>
			</button>
			<button
				class=" hover:bg-gray-300 grid place-items-center w-full btn bg-white border-primary border-2 font-normal text-sm rounded-lg text-primary"
			>
				<h5>Cancel</h5>
			</button>
		</div>
		<div />
	</div>
</div>
