<script lang="ts">
	import { locale } from '$lib/i18n';
	import { messages } from '$lib/i18n/copy';
	import { getSiteConfig } from '$lib/utils/content';

	const config = getSiteConfig();
	const i18n = $derived(messages[$locale]);
</script>

<svelte:head>
	<title>{config.name}</title>
	<meta name="description" content={i18n.site.description} />
</svelte:head>

<section class="section-divider py-24 md:py-32 lg:py-40">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="surface-panel max-w-5xl px-6 py-10 md:px-10 md:py-14 lg:px-14">
			<p class="eyebrow-link mb-5 text-xs">{i18n.home.heroEyebrow}</p>
			<h1 class="hero-title mb-6 text-5xl lowercase md:text-7xl lg:text-8xl">{config.name}</h1>
			<p class="lead-copy text-xl md:text-2xl">
				{i18n.site.tagline}
			</p>

			<div class="mt-8 grid grid-cols-1 gap-4 border-t border-line pt-8 sm:grid-cols-3">
				{#each i18n.home.stats as stat}
					<div>
						{#if (stat as any).secondary}
							<p class="muted-copy text-sm font-medium tracking-wide md:text-base">{stat.value}</p>
						{:else}
							<p class="page-title text-2xl md:text-3xl">{stat.value}</p>
						{/if}
						<p class="muted-copy mt-1 text-sm leading-snug">{stat.label}</p>
					</div>
				{/each}
			</div>

			<div class="mt-8 flex flex-wrap gap-4">
				<a href="/contact" class="btn-primary">{i18n.home.primaryCta}</a>
				<a href="/portfolio" class="btn-secondary">{i18n.home.secondaryCta}</a>
			</div>
		</div>
	</div>
</section>

<section class="py-12 md:py-20 lg:py-24" style="background: rgba(210, 195, 170, 0.15);">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<div class="surface-panel p-8 text-center md:text-left">
				<p class="eyebrow-link mb-3 text-xs">{i18n.home.workEyebrow}</p>
				<h2 class="page-title mb-4 text-3xl lowercase">{i18n.home.workTitle}</h2>
				<p class="muted-copy mb-6 text-base leading-relaxed md:text-lg">
					{i18n.home.workText}
				</p>
				<a href="/portfolio" class="eyebrow-link text-sm font-bold transition-colors hover:text-primary-dark">
					{i18n.home.workLink}
				</a>
			</div>

			<div class="surface-panel p-8 text-center md:text-left">
				<p class="eyebrow-link mb-3 text-xs">{i18n.home.backgroundEyebrow}</p>
				<h2 class="page-title mb-4 text-3xl lowercase">{i18n.home.backgroundTitle}</h2>
				<p class="muted-copy mb-6 text-base leading-relaxed md:text-lg">
					{i18n.home.backgroundText}
				</p>
				<a href="/about" class="eyebrow-link text-sm font-bold transition-colors hover:text-primary-dark">
					{i18n.home.backgroundLink}
				</a>
			</div>

			<div class="surface-panel p-8 text-center md:text-left">
				<p class="eyebrow-link mb-3 text-xs">{i18n.home.contactEyebrow}</p>
				<h2 class="page-title mb-4 text-3xl lowercase">{i18n.home.contactTitle}</h2>
				<p class="muted-copy mb-6 text-base leading-relaxed md:text-lg">
					{i18n.home.contactText}
				</p>
				<a href="/contact" class="eyebrow-link text-sm font-bold transition-colors hover:text-primary-dark">
					{i18n.home.contactLink}
				</a>
			</div>
		</div>
	</div>
</section>

<section class="soft-band py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<p class="eyebrow-link mb-3 text-xs">{i18n.home.selectedEyebrow}</p>
			<h2 class="page-title mb-4 text-4xl lowercase md:text-5xl">{i18n.home.selectedTitle}</h2>
			<p class="muted-copy text-base leading-relaxed md:text-lg">
				{i18n.home.selectedText}
			</p>
		</div>

		<div class="mt-10 text-center">
			<a href="/portfolio" class="btn-primary">{i18n.home.selectedCta}</a>
		</div>
	</div>
</section>
