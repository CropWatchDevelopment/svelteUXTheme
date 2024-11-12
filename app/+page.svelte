<script lang="ts">
	import { getUserState } from "$lib/state/user-state.svelte";

	let userContext = getUserState();
	let { user } = $derived(userContext);
	$inspect(userContext);
</script>

<h1>Dashboard</h1>

{#if user}
    <p>Welcome, {user.email}</p>
	<p>Welcome, {userContext.user?.email}</p>
{:else}
    <p>You are not logged in.</p>
{/if}