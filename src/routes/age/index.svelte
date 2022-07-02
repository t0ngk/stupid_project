<script lang="ts">
	import { goto } from '$app/navigation';

	import { onMount } from 'svelte';

	let birthUnix: string | null = null;
	let birthSecond: number | null = null;
	let agePass: string | null = null;
	let count: number | null = null;
	const unixNeeded = 20 * 365 * 24 * 60 * 60 * 1000;

	onMount(() => {
		birthUnix = localStorage.getItem('age');
		agePass = localStorage.getItem('agePass');
		let currentDate = new Date();
		let currentDateUnix = currentDate.getTime();
		if (agePass !== 'false') goto('/');
		if (!birthUnix) {
			return goto('/');
		} else {
			count = unixNeeded - (currentDateUnix - parseInt(birthUnix));
			count = Math.floor(count / 1000);

			const countdown = () => {
				setTimeout(() => {
					if (!count) return;
					count -= 1;
					console.log(count);
					console.log(Math.floor(count / 86400));
					countdown();
				}, 1000);
			};
			countdown();
		}
	});
</script>

<div
	class="w-full h-screen bg-red-600 flex flex-col items-center justify-center text-center gap-y-4"
>
	<h1 class="font-semibold text-7xl text-white">Be patience</h1>
	<p class="text-lg opacity-80 font-medium text-white">
		This site will unlock when you are 20 or older.<br />
		Why don't you just born earlier next time kid LOL.
	</p>
	{count}
	{#if count !== null}
		<div class="my-4">
			<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
				<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
					<span class="countdown font-mono text-5xl">
						<span style={`--value:${Math.floor(count ?? 0 / 86400)};`} />
					</span>
					days
				</div>
				<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
					<span class="countdown font-mono text-5xl">
						<span style={`--value:${Math.floor(count ?? 0 / 3600)};`} />
					</span>
					hours
				</div>
				<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
					<span class="countdown font-mono text-5xl">
						<span style={`--value:${Math.floor(count ?? 0 / 60)};`} />
					</span>
					min
				</div>
			</div>
		</div>
	{/if}
</div>
