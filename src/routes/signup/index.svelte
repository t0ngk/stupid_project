<script>
import { goto } from "$app/navigation";

let username = "";
let password = "";

const handleSignUp = async () => {
	if (!username || !password) {
		return alert("Username or Password are missing, please try again!")
	}

	const payload = {username: username, password: password}

	const res = await fetch(`/api/auth/register.json`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});

	const { data } = await res.json();
	if (data.username) {
		alert("Registration Successfully! You will be redirect to home page.")
		localStorage.setItem("username", data.username);
		goto("/home")
	}
}
</script>

<div class="w-full h-screen flex flex-col justify-around items-center py-12 bg-white">
	<div class="flex flex-col items-center text-center">
		<h1 class="text-6xl font-semibold my-4">Tell us who you are</h1>
		<p class="leading-5">
			By signing up, meanas you're surrendering your personal information to us.<br />
			You accept anything that may happen from now on. You're warned.
		</p>
	</div>
	<div class="flex flex-col w-96 gap-y-4">
		<div class="flex flex-col ">
			<span class="text-sm ">Username</span>
			<input
				type="text"
				bind:value={username}
				class="px-4 py-2 border-2 border-primary rounded-lg focus:outline-primary focus:outline-double cursor-pointer"
			/>
		</div>
		<div class="flex flex-col ">
			<span class="text-sm">Back for more?</span>
			<input
				type="password"
				bind:value={password}
				class="px-4 py-2 border-2 border-primary rounded-lg focus:outline-primary focus:outline-double cursor-pointer"
			/>
		</div>
		<div class="flex flex-col gap-y-2">
			<div on:click={handleSignUp} class="w-full py-3 bg-primary rounded-lg grid place-items-center cursor-pointer">
				<h1 class="text-white text-lg font-semibold" >Sign up</h1>
			</div>
			<a
				href="/signin"
				class="text-primary underline text-sm text-center inline-block w-full cursor-pointer"
				>Already has an account have an account?</a
			>
		</div>
	</div>
	<div
	on:click={() => goto('/home')}

		class="rounded-lg border-2 border-primary w-72 text-primary mx-auto text-center text-sm py-1.5 cursor-pointer"
	>
		Continue as a guest
	</div>
</div>
