<script lang="ts">
	import type { Project } from '$lib/types';
	import { interpolate, locale } from '$lib/i18n';
	import { messages } from '$lib/i18n/copy';
	import { getSiteConfig } from '$lib/utils/content';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const config = getSiteConfig();

	const { data } = $props();
	const i18n = $derived(messages[$locale]);
	let localizedProjects = $state<Project[] | null>(null);
	const projects = $derived(localizedProjects ?? (data.projects as Project[]));

	$effect(() => {
		const activeLocale = $locale;
		let cancelled = false;

		void fetch(`/api/projects?lang=${activeLocale}`)
			.then(async (response) => {
				if (!response.ok) return projects;
				return (await response.json()) as Project[];
			})
			.then((nextProjects) => {
				if (!cancelled) {
					localizedProjects = nextProjects;
				}
			})
			.catch(() => {});

		return () => {
			cancelled = true;
		};
	});
</script>

<svelte:head>
	<title>{i18n.portfolio.metaTitle} - {config.name}</title>
	<meta
		name="description"
		content={interpolate(i18n.portfolio.metaDescription, { name: config.name })}
	/>
</svelte:head>

<section class="section-divider py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="surface-panel max-w-3xl px-6 py-8 md:px-8">
			<p class="eyebrow-link mb-3 text-xs">{i18n.portfolio.heroEyebrow}</p>
			<h1 class="page-title mb-4 text-4xl lowercase md:text-5xl">{i18n.portfolio.title}</h1>
			<p class="lead-copy text-base leading-relaxed md:text-lg">
				{i18n.portfolio.intro}
			</p>
		</div>
	</div>
</section>

<section class="py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		{#if projects.length === 0}
			<div class="surface-panel py-12 text-center">
				<p class="muted-copy text-sm md:text-base">{i18n.portfolio.empty}</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10">
				{#each projects as project}
					<ProjectCard {project} />
				{/each}
			</div>
		{/if}
	</div>
</section>

<section class="soft-band py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<p class="eyebrow-link mb-3 text-xs">{i18n.portfolio.moreEyebrow}</p>
		<h2 class="page-title mb-4 text-4xl lowercase md:text-5xl">{i18n.portfolio.moreTitle}</h2>
		<p class="muted-copy mb-8 text-base leading-relaxed md:text-lg">
			{i18n.portfolio.moreText}
		</p>
		<a href="/contact" class="btn-primary">{i18n.portfolio.moreCta}</a>
	</div>
</section>
