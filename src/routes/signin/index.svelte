<script>
import { goto } from "$app/navigation";

let username = "";
let password = "";

const handleSignIn = async () => {
	if (!username || !password) {
		return alert("Username or Password are missing, please try again!");
	}

	const payload = {username: username, password: password}

	const res = await fetch(`/api/auth/login.json`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});

	const data = await res.json();

	if (data.message === "User Not Found !" || data.message === "Username or Password not valid, please try again.") {
		return alert("Username or Password is not valid, please try again!");
	}

	if (data.body.username) {
		alert("Login Successfully! You will be redirect to home page.");
		localStorage.setItem("username", data.body.username);
		goto("/home");
	}
}
</script>

<div class="w-full h-screen flex flex-col justify-around items-center py-12 bg-white">
	<div class="flex flex-col items-center text-center">
		<h1 class="text-6xl font-semibold my-4">Back for more?</h1>
		<p class="leading-5">
			By signing in, others will know who you are,<br />
			allowing indiviuals to hunt you down due to your opinions.
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
			<div on:click={handleSignIn} class="w-full py-3 bg-primary rounded-lg grid place-items-center cursor-pointer">
				<h1 class="text-white text-lg font-semibold" >Sign in</h1>
			</div>
			<a
				href="/signup"
				class="text-primary underline text-sm text-center inline-block w-full cursor-pointer"
				>Don't have an account?</a
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
