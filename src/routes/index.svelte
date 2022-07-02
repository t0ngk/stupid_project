<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/index.es';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	const unixNeeded = 20 * 365 * 24 * 60 * 60 * 1000;

	let myDateString: string | null = null;
	let birth: Date | null = null;
	$: if (myDateString) {
		birth = new Date(myDateString);
	}
	$: console.log(birth?.getTime());
	function checkAge() {
		let currentDate = new Date();
		if (!birth) return alert('The field cannot be left emptied.');
		localStorage.setItem('age', `${birth?.getTime()}`);
		if (currentDate.getTime() - birth?.getTime() > unixNeeded) {
			// Above 20
			localStorage.setItem('agePass', 'true');
			goto('/login');
		} else {
			// Younger than 20
			localStorage.setItem('agePass', 'false');
			goto('/age');
		}
	}
	onMount(() => {
		let age = localStorage.getItem('age');
		let currentDate = new Date();
		if (age) {
			if (parseInt(age) - currentDate.getTime() > unixNeeded) {
				localStorage.setItem('agePass', 'true');
			} else {
				localStorage.setItem('agePass', 'false');
			}
			if (localStorage.getItem('agePass') === 'false') return goto('/age');
			// if (localStorage.getItem('agePass') === 'false') console.log('go to jail');
		}
	});
</script>

<div class="h-screen w-screen bg-black flex justify-center items-center overflow-hidden">
	<div class="flex flex-col justify-center items-center gap-y-4">
		<h1 class="text-7xl text-white font-semibold">Are you 20 or older?</h1>
		<p class="text-xl text-center text-white mb-16 leading-6 opacity-80">
			This site contains alchohol and adult contents<br />
			and requires the user to be at least 20 years old or older
		</p>
		<div class=" w-60 place-items-center  flex flex-col gap-y-4 justify-center items-center">
			<input
				required
				bind:value={myDateString}
				type="date"
				class="w-full focus:outline-none text-lg font-serif px-4 py-2 outline outline-1 outline-white rounded-lg"
			/>
			<button on:click={checkAge} class="btn btn-primary h-10 w-full uppercase">Submit</button>
			<!-- <input class="bg-transparent text-white w-4/5 text-lg text-center" bind:value={myDate} type="text" name="" id=""> -->
		</div>
	</div>
</div>

<!-- <h1 class="text-3xl font-bold underline">Stupid Project</h1>
<div class="btn">This Btn From DaisyUI</div>
<h1>Bind From Datepicker {myDate}</h1>
<Fa icon={faFlag} /> -->
