<script lang="ts">
	import { goto } from '$app/navigation';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime.js';
	import { onMount } from 'svelte';

	let age:any = null;
	let when20:any = null;

	onMount(() => {
		dayjs.extend(relativeTime);
		age = localStorage.getItem('age');
		// when20 = dayjs().to(dayjs(age).add(20, 'year'));
		let currentAge = dayjs().diff(dayjs(age), 'year');
		if (currentAge >= 20) {
			goto('/signin');
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
	<!-- {when20} -->
	<!-- {#if count !== null}
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
	{/if} -->
</div>
