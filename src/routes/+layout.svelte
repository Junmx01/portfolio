<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { initLocale } from '$lib/i18n';
	import { applyTheme } from '$lib/utils/content';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		applyTheme();
		initLocale();
	});
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="site-shell flex min-h-screen flex-col">
	<Header />

	<main class="app-main flex-grow">
		<slot />
	</main>

	<Footer />
</div>
