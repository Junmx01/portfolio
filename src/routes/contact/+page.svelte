<script lang="ts">
	import { interpolate, locale } from '$lib/i18n';
	import { messages } from '$lib/i18n/copy';
	import { getSiteConfig } from '$lib/utils/content';
	import ContactForm from '$lib/components/ContactForm.svelte';

	const config = getSiteConfig();
	const i18n = $derived(messages[$locale]);
</script>

<svelte:head>
	<title>{i18n.contact.metaTitle} - {config.name}</title>
	<meta
		name="description"
		content={interpolate(i18n.contact.metaDescription, { name: config.name })}
	/>
</svelte:head>

<section class="section-divider py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="surface-panel max-w-3xl px-6 py-8 md:px-8">
			<p class="eyebrow-link mb-3 text-xs">{i18n.contact.heroEyebrow}</p>
			<h1 class="page-title mb-4 text-4xl lowercase md:text-5xl">{i18n.contact.title}</h1>
			<p class="lead-copy text-base leading-relaxed md:text-lg">
				{i18n.contact.intro}
			</p>
		</div>
	</div>
</section>

<section class="py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]">
			<div class="surface-panel px-6 py-8 md:px-8">
				<p class="eyebrow-link mb-3 text-xs">{i18n.contact.panelEyebrow}</p>
				<h2 class="page-title mb-6 text-4xl lowercase">{i18n.contact.panelTitle}</h2>
				<div class="space-y-6">
					<p class="muted-copy text-base leading-relaxed md:text-lg">
						{i18n.contact.panelText}
					</p>

					<div class="space-y-5">
						<div>
							<h3 class="mb-2 text-lg font-bold lowercase">{i18n.contact.emailLabel}</h3>
							<p class="muted-copy text-base leading-relaxed md:text-lg">
								<a href="mailto:{config.email}" class="transition-colors hover:text-accent">
									{config.email}
								</a>
							</p>
						</div>

						{#if config.location}
							<div>
								<h3 class="mb-2 text-lg font-bold lowercase">{i18n.contact.locationLabel}</h3>
								<p class="muted-copy text-base leading-relaxed md:text-lg">{i18n.site.location}</p>
							</div>
						{/if}

						{#if config.social}
							<div>
								<h3 class="mb-2 text-lg font-bold lowercase">{i18n.contact.socialLabel}</h3>
								<div class="flex flex-wrap gap-3">
									{#if config.social.github}
										<a
											href="https://github.com/{config.social.github}"
											class="soft-tag px-4 py-2 text-sm uppercase tracking-wide"
											target="_blank"
											rel="noopener noreferrer"
										>
											github
										</a>
									{/if}
									{#if config.social.linkedin}
										<a
											href="https://linkedin.com/in/{config.social.linkedin}"
											class="soft-tag px-4 py-2 text-sm uppercase tracking-wide"
											target="_blank"
											rel="noopener noreferrer"
										>
											linkedin
										</a>
									{/if}
									{#if config.social.twitter}
										<a
											href="https://twitter.com/{config.social.twitter}"
											class="soft-tag px-4 py-2 text-sm uppercase tracking-wide"
											target="_blank"
											rel="noopener noreferrer"
										>
											twitter
										</a>
									{/if}
									{#if config.social.instagram}
										<a
											href="https://instagram.com/{config.social.instagram}"
											class="soft-tag px-4 py-2 text-sm uppercase tracking-wide"
											target="_blank"
											rel="noopener noreferrer"
										>
											instagram
										</a>
									{/if}
								</div>
							</div>
						{/if}
					</div>

					<div class="rounded-[24px] border border-line bg-[rgba(255,252,248,0.72)] p-6">
						<h3 class="mb-2 text-lg font-bold lowercase">{i18n.contact.responseTitle}</h3>
						<p class="muted-copy text-sm md:text-base">
							{i18n.contact.responseText}
						</p>
					</div>
				</div>
			</div>

			<div>
				<ContactForm />
			</div>
		</div>
	</div>
</section>

<section class="soft-band py-12 md:py-20 lg:py-24">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<p class="eyebrow-link mb-3 text-xs">{i18n.contact.availabilityEyebrow}</p>
		<h2 class="page-title mb-4 text-4xl lowercase md:text-5xl">{i18n.contact.availabilityTitle}</h2>
		<p class="muted-copy mb-8 text-base leading-relaxed md:text-lg">
			{i18n.contact.availabilityText}
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			{#each i18n.contact.availabilityTags as tag}
				<span class="soft-tag px-4 py-2 text-sm uppercase tracking-wide md:text-base">{tag}</span>
			{/each}
		</div>
	</div>
</section>
