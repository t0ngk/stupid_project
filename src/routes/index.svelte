<script lang="ts">
	import SveltyPicker from 'svelty-picker/src/SveltyPicker.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faCalendar } from '@fortawesome/free-solid-svg-icons';
	let myDate = '25/04/2003';
</script>

<div class="h-screen w-screen bg-black flex justify-center items-center">
	<div class="flex flex-col justify-center">
		<h1 class="text-7xl text-white font-semibold mb-3">Are you 20 or older?</h1>
		<p class="text-lg text-center text-white mb-16">
			This site contains alchohol and  adult contents<br>
			and requires the user to be at least 20 years old or older
		</p>
		<div class="outline outline-1 outline-white h-12 rounded-xl">
			<Fa icon={faCalendar} size="lg"/>
		</div>
	</div>
</div>

<!-- <h1 class="text-3xl font-bold underline">Stupid Project</h1>
<div class="btn">This Btn From DaisyUI</div>
<SveltyPicker inputClasses="form-control" format="yyyy-mm-dd" bind:value={myDate} />
<h1>Bind From Datepicker {myDate}</h1>
<Fa icon={faFlag} /> -->
