<script lang="ts">
	import type { Component } from 'svelte';
	import { loadAboutContent } from '$lib/content/localized';
	import { interpolate, locale } from '$lib/i18n';
	import { messages } from '$lib/i18n/copy';
	import { getSiteConfig } from '$lib/utils/content';

	const config = getSiteConfig();
	const { data } = $props();
	const i18n = $derived(messages[$locale]);
	let localizedContent = $state<Component | null>(null);
	const RenderedContent = $derived((localizedContent ?? data.content) as Component);

	$effect(() => {
		const activeLocale = $locale;
		let cancelled = false;

		void loadAboutContent(activeLocale)
			.then((about) => {
				if (!cancelled) {
					localizedContent = about.default as Component;
				}
			})
			.catch(() => {});

		return () => {
			cancelled = true;
		};
	});
</script>

<svelte:head>
	<title>{i18n.about.metaTitle} - {config.name}</title>
	<meta
		name="description"
		content={interpolate(i18n.about.metaDescription, { name: config.name })}
	/>
</svelte:head>

<section class="section-divider py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="surface-panel max-w-3xl px-6 py-8 md:px-8">
			<p class="eyebrow-link mb-3 text-xs">{i18n.about.heroEyebrow}</p>
			<h1 class="page-title mb-4 text-4xl lowercase md:text-5xl">{i18n.about.title}</h1>
			<p class="lead-copy text-base leading-relaxed md:text-lg">
				{interpolate(i18n.about.intro, { name: config.name })}
			</p>
		</div>
	</div>
</section>

<section class="py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
			<div class="lg:col-span-1">
				<div class="surface-panel p-8">
					<p class="eyebrow-link mb-5 text-xs">{i18n.about.positionEyebrow}</p>
					<ul class="space-y-3">
						{#each i18n.about.positionKeywords as keyword}
							<li class="flex items-start gap-2">
								<span class="mt-1 text-primary">—</span>
								<span class="page-title text-base lowercase leading-snug">{keyword}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<div class="lg:col-span-2">
				<div class="surface-panel px-6 py-8 md:px-8">
					<div class="prose prose-lg max-w-none">
						<RenderedContent />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="soft-band py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<p class="eyebrow-link mb-3 text-center text-xs">{i18n.about.toolkitEyebrow}</p>
		<h2 class="page-title mb-10 text-center text-4xl lowercase md:text-5xl">{i18n.about.toolkitTitle}</h2>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each i18n.about.toolGroups as group}
				<div class="surface-panel p-6 text-center">
					<h3 class="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-accent">{group.title}</h3>
					<ul class="muted-copy space-y-1 text-sm md:text-base">
						{#each group.items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<p class="eyebrow-link mb-3 text-xs">{i18n.about.collaborationEyebrow}</p>
		<h2 class="page-title mb-4 text-4xl lowercase md:text-5xl">{i18n.about.collaborationTitle}</h2>
		<p class="muted-copy mb-8 text-base leading-relaxed md:text-lg">
			{i18n.about.collaborationText}
		</p>
		<a href="/contact" class="btn-primary">{i18n.about.collaborationCta}</a>
	</div>
</section>
