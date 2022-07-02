<script lang="ts">
    export let title : string | null = null
    export let amount : number | null = null
</script>

<div class= "flex text-sm">
    <div class="rounded-l-full  pl-3 pr-1 text-white bg-primary font-medium grid place-items-center">
        <h1>{amount}</h1>
    </div>
    <div class="border-primary border-2 rounded-r-full  pr-6 pl-1">
        {title}
    </div>
</div>