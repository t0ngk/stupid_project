<script lang="ts">
	import SveltyPicker from 'svelty-picker/src/SveltyPicker.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
	let myDate = 'DD / MM / YYYY';
</script>

<div class="h-screen w-screen bg-black flex justify-center items-center overflow-hidden">
	<div class="flex flex-col justify-center items-center">
		<h1 class="text-7xl text-white font-semibold mb-3">Are you 20 or older?</h1>
		<p class="text-lg text-center text-white mb-5">
			This site contains alchohol and  adult contents<br>
			and requires the user to be at least 20 years old or older
		</p>
		<div class="outline outline-1 outline-white h-12 w-60 rounded-xl flex overflow-hidden">
			<div class="h-full flex items-center justify-center w-1/5">
				<Fa icon={faCalendarDays} color="white" size="2x"/>
			</div>
			<input class="bg-transparent text-white w-4/5 text-lg text-center" bind:value={myDate} type="text" name="" id="">
		</div>
	</div>
</div>

<style>
	:global(.test) {
		background-color: rgba(0, 0, 0, 0);
		/* text-align: center; */
		width: 100%;
	}
</style>

<!-- <h1 class="text-3xl font-bold underline">Stupid Project</h1>
<div class="btn">This Btn From DaisyUI</div>
<h1>Bind From Datepicker {myDate}</h1>
<Fa icon={faFlag} /> -->
