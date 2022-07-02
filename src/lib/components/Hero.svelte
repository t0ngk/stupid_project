<script lang="ts">
import { goto } from '$app/navigation';

	import hero from '$lib/assets/hero.png';
</script>

<section class="w-full h-[90vh] flex flex-col items-center justify-around py-20 relative ">
	<div class="absolute inset-0 grid place-items-center overflow-hidden">
		<img src={hero} class="transform translate-x-80 -translate-y-24 blur-lg scale-75" alt="hero drink assets" />
	</div>
	<div class="flex flex-col items-center gap-y-6 z-10">
		<h1 class="text-6xl font-bold text-center">Create your own shitty drink</h1>
		<p class="text-center text-sm">
			If you're in the night, wondering what drink you should have,<br />
			create your own monster with us. You'll regret it.
		</p>
	</div>
	<div class="w-56 flex flex-col items-center text-center gap-y-2 z-10">
		<button on:click={ () => goto('/mix')} class="py-2 w-full text-white bg-primary rounded-lg"> Mix </button>
		<button on:click={ () => goto('/browse')} class="py-2 w-full text-primary bg-blue-200 grid place-items-center rounded-lg">
			Browse
		</button>
	</div>
</section>
