<script lang="ts">
	import '../app.css';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';
	import { appConfigDefaults } from '$lib/app.config';
	import Footer from '$lib/components/UI/Footer.svelte';
	import Header from '$lib/components/UI/Header.svelte';
	import { AppLayout, NavItem, settings } from 'svelte-ux';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { setUserState } from '$lib/state/user-state.svelte';

	let { children, data } = $props();
	let { session, supabase } = $derived(data);

	let userState = setUserState({
		session: data.session,
		supabase: data.supabase,
		user: data.user
	});

	$effect(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			console.log('onAuthStateChanged!', newSession);

			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}

			userState.updateState({
				session: newSession,
				supabase,
				user: newSession?.user || null
			});
		});
		return () => data.subscription.unsubscribe();
	});
	$inspect(session);

	settings(appConfigDefaults);
</script>

<ParaglideJS {i18n}>
	<AppLayout areas="'header' 'aside main'">
		<svelte:fragment slot="nav">
			<ul class="w-full">
				<NavItem
					text="Dashboard"
					currentUrl={$page.url}
					path="/app"
					classes={{ root: 'pl-3', active: 'bg-primary/10 text-primary' }}
				/>
				<NavItem
					text="Login"
					currentUrl={$page.url}
					path="/auth/login"
					classes={{ root: 'pl-3', active: 'bg-primary/10 text-primary' }}
				/>
				<NavItem
					text="Logout"
					currentUrl={$page.url}
					path="/auth/logout"
					classes={{ root: 'pl-3', active: 'bg-primary/10 text-primary' }}
				/>
			</ul>
		</svelte:fragment>

		<Header />

		<main class="flex h-full flex-col">
			<section class="flex-col">
				{@render children()}
			</section>
			<span class="flex-grow"></span>
			<Footer />
		</main>
	</AppLayout>
</ParaglideJS>
