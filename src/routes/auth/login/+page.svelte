<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { loginFormSchema } from './forms/login.schema.js';
	import { Button } from 'svelte-ux';
	import { goto } from '$app/navigation';
	import { setUserState } from '$lib/state/user-state.svelte.js';

	let { data } = $props();

	// Client API:
	const { form, enhance, constraints, errors } = superForm(data, {
		validationMethod: 'oninput',
		onChange: async (values) => {
			console.log(values);
		},
		onSubmit: async (values) => {
			console.log('Logging In...');
		},
		onResult(event) {
			debugger;
			console.log('login result:', event);
			// const userState = setUserState({
			// 	// session: event.result.data.session,
			// 	supabase: event.result.data.supabase,
			// 	user: event.result.data.user
			// });
			goto('/app');
		}
	});
</script>

<form method="POST" use:enhance>
	<div>
		<label for="email">E-mail</label>
		<input
			type="email"
			name="email"
			bind:value={$form.email}
			{...$constraints.email}
			aria-invalid={$errors.email ? 'true' : undefined}
		/>
		{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
	</div>

	<div>
		<label for="password">Password</label>
		<input
			type="password"
			name="password"
			bind:value={$form.password}
			{...$constraints.password}
			min={$constraints.password?.min?.toString().slice(0, 10)}
			aria-invalid={$errors.password ? 'true' : undefined}
		/>
		{#if $errors.password}<span class="invalid">{$errors.password}</span>{/if}
	</div>

	<div>
		<Button type="submit" variant="fill">Submit</Button>
	</div>
</form>
