<script lang="ts">
import { page } from "$app/stores";
import { onMount } from "svelte";

  import "../app.css";
import Navbar from "$lib/components/micro/Navbar.svelte";

  let enableNavbar : boolean = false

  onMount( () => {
    if (['home', 'mix', 'browse', 'view', 'comment/2', 'comment/3', 'comment/4'].includes(window.location.pathname.replaceAll('/', ''))) enableNavbar = true
  })

</script>

{
  #if enableNavbar
}
<Navbar/>
{
  /if
}
<slot />
