<script lang="ts">
import { onMount } from "svelte";

  import "../app.css";
import Navbar from "$lib/components/micro/Navbar.svelte";

  let enableNavbar : boolean = false

  onMount( () => {
    if (['home', 'mix', 'browse', 'view', 'comment2', 'comment3', 'comment4'].includes(window.location.pathname.replaceAll('/', ''))) enableNavbar = true
    if (window.location.pathname.includes('comment')) enableNavbar = true
    if (window.location.pathname.includes('view')) enableNavbar = true
  })
  import { goto } from '$app/navigation';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime.js';

	let age:any = null;
	let when20:any = null;

	onMount(() => {
		dayjs.extend(relativeTime);
		age = localStorage.getItem('age');
		// when20 = dayjs().to(dayjs(age).add(20, 'year'));
		let currentAge = dayjs().diff(dayjs(age), 'year');
		if (currentAge < 20) {
			goto('/age');
		}
	});


</script>

{
  #if enableNavbar
}
<Navbar/>
{
  /if
}
<slot />
