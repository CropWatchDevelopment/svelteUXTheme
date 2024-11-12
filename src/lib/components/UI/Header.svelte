<script lang="ts">
	import { getUserState } from '$lib/state/user-state.svelte';
	import { AppBar } from 'svelte-ux';

	let userContext = getUserState();
	let { user } = $derived(userContext);
</script>

<AppBar class="bg-blue-500 text-primary-content" title="Example">
	<div slot="actions">
		<button class="btn btn-ghost">Home</button>
		<button class="btn btn-ghost">About</button>
		<button class="btn btn-ghost">Contact</button>
		{#if user}
            <span>{user.email}</span>
			<button class="btn btn-ghost" onclick={() => userContext.logout()}>Logout</button>
		{:else}
			<button class="btn btn-ghost">Login</button>
		{/if}
	</div>
</AppBar>
