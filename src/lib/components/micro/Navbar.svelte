<script>

import { goto } from "$app/navigation";

</script>
<div class="z-20 px-8 h-12 bg-black flex justify-between items-center font-semibold text-white fixed left-0 right-0 top-0">
    <h3 on:click={() => goto('/home')} class="cursor-pointer">
        Taoloi 
    </h3>
    <div class="flex justify-center items-center gap-x-8 text-sm">
        <h3 on:click={() => goto('/mix')} class="cursor-pointer">
            Mix
        </h3>
        <h3 on:click={() => goto('/browse')} class="cursor-pointer">
            Browse
        </h3>
        <h3 
        on:click={() => {
            alert("Signed Out !")
            localStorage.removeItem("username");
            goto("/signin")
        }} 
        class="cursor-pointer"
        >
            Logout !
        </h3>
    </div>
</div>