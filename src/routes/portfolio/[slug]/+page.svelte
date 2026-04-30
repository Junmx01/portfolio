<script lang="ts">
	import type { Component } from 'svelte';
	import { loadProjectContent } from '$lib/content/localized';
	import { locale } from '$lib/i18n';
	import { messages } from '$lib/i18n/copy';
	import { getSiteConfig } from '$lib/utils/content';

	const config = getSiteConfig();

	const { data } = $props();
	const i18n = $derived(messages[$locale]);
	let localizedContent = $state<Component | null>(null);
	let localizedMeta = $state<Record<string, any> | null>(null);
	let selectedImage = $state<{ src: string; alt: string } | null>(null);
	let contentRoot = $state<HTMLDivElement | null>(null);
	const RenderedContent = $derived((localizedContent ?? data.content) as Component);
	const meta = $derived(localizedMeta ?? (data.meta as Record<string, any>));
	const openImageLabel = $derived(
		$locale === 'zh' ? '打开图片预览' : $locale === 'es' ? 'Abrir vista ampliada' : 'Open image preview'
	);
	const closePreviewLabel = $derived(
		$locale === 'zh' ? '关闭图片预览' : $locale === 'es' ? 'Cerrar vista ampliada' : 'Close image preview'
	);
	const galleryTitle = $derived(
		$locale === 'zh' ? '细节展示' : $locale === 'es' ? 'Capturas del proyecto' : 'Project screenshots'
	);

	function openImage(src: string, alt: string) {
		selectedImage = { src, alt };
	}

	function closeImage() {
		selectedImage = null;
	}

	function handleWindowKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && selectedImage) {
			closeImage();
		}
	}

	function handleContentClick(event: MouseEvent) {
		const target = event.target;
		if (!(target instanceof HTMLImageElement)) return;

		openImage(target.currentSrc || target.src, target.alt || meta.title);
	}

	$effect(() => {
		const activeLocale = $locale;
		const slug = data.slug;
		let cancelled = false;

		if (!slug) return;

		void loadProjectContent(slug, activeLocale)
			.then((project) => {
				if (!cancelled) {
					localizedContent = project.default as Component;
					localizedMeta = project.metadata;
				}
			})
			.catch(() => {});

		return () => {
			cancelled = true;
		};
	});

	$effect(() => {
		if (!contentRoot) return;

		const listener = (event: MouseEvent) => handleContentClick(event);
		contentRoot.addEventListener('click', listener);

		return () => {
			contentRoot?.removeEventListener('click', listener);
		};
	});
</script>

<svelte:window onkeydown={handleWindowKeydown} />

<svelte:head>
	{#if meta}
		<title>{meta.title} - {config.name}</title>
		<meta name="description" content={meta.description} />
	{:else}
		<title>{i18n.project.fallbackTitle} - {config.name}</title>
	{/if}
</svelte:head>

{#if RenderedContent}
	<section class="section-divider py-6">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<a href="/portfolio" class="eyebrow-link text-sm font-bold transition-colors hover:text-primary-dark">
				{i18n.project.backLink}
			</a>
		</div>
	</section>

	<section class="section-divider py-12 md:py-20 lg:py-24">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="surface-panel max-w-4xl px-6 py-8 md:px-10 md:py-10">
				<p class="eyebrow-link mb-3 text-xs">{i18n.project.heroEyebrow}</p>
				<h1 class="page-title mb-3 text-4xl lowercase md:text-5xl lg:text-6xl">{meta.title}</h1>
				<p class="muted-copy mb-8 text-base leading-relaxed md:text-xl">{meta.description}</p>

				<div class="mb-8 grid gap-6 md:grid-cols-[180px_1fr]">
					<div>
						<h3 class="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-accent">{i18n.project.dateLabel}</h3>
						<p class="muted-copy text-sm md:text-base">
							{new Date(meta.date).toLocaleDateString()}
						</p>
					</div>

					{#if meta.tags && meta.tags.length > 0}
						<div>
							<h3 class="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-accent">{i18n.project.tagsLabel}</h3>
							<div class="flex flex-wrap gap-2">
								{#each meta.tags as tag}
									<span class="soft-tag px-3 py-1 text-xs uppercase tracking-wide">
										{tag}
									</span>
								{/each}
							</div>
						</div>
					{/if}
				</div>

				<div class="flex flex-wrap gap-4">
					{#if meta.link}
						<a href={meta.link} target="_blank" rel="noopener noreferrer" class="btn-primary">
							{i18n.project.liveProject}
						</a>
					{/if}
					{#if meta.github}
						<a href={meta.github} target="_blank" rel="noopener noreferrer" class="btn-secondary">
							{i18n.project.viewCode}
						</a>
					{/if}
				</div>
			</div>
		</div>
	</section>

	{#if meta.thumbnail}
		<section class="py-10 md:py-14">
			<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div class="surface-panel overflow-hidden p-3">
					<button
						type="button"
						class="project-image-button aspect-[16/9] overflow-hidden rounded-[22px] bg-highlight"
						aria-label={openImageLabel}
						onclick={() => openImage(`/content/images/projects/${meta.thumbnail}`, meta.title)}
					>
						<img
							src="/content/images/projects/{meta.thumbnail}"
							alt={meta.title}
							class="h-full w-full object-cover"
						/>
					</button>
				</div>
			</div>
		</section>
	{/if}

	<section class="py-6 md:py-10 lg:py-14">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<div class="surface-panel px-6 py-8 md:px-10 md:py-10">
				<div bind:this={contentRoot} class="prose prose-lg max-w-none">
					<RenderedContent />
				</div>
			</div>
		</div>
	</section>

	{#if meta.images && meta.images.length > 0}
		<section class="py-6 md:py-10">
			<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<h2 class="page-title mb-6 text-2xl lowercase md:text-3xl">{galleryTitle}</h2>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{#each meta.images as image}
						<button
							type="button"
							class="project-image-button surface-panel overflow-hidden p-2"
							aria-label={openImageLabel}
							onclick={() => openImage(`/content/images/projects/${image}`, meta.title)}
						>
							<img
								src="/content/images/projects/{image}"
								alt={meta.title}
								class="aspect-[4/3] h-full w-full rounded-[18px] object-cover"
							/>
						</button>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<section class="py-12 md:py-20 lg:py-24">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<p class="eyebrow-link mb-3 text-xs">{i18n.project.moreEyebrow}</p>
			<h2 class="page-title mb-4 text-4xl lowercase md:text-5xl">{i18n.project.moreTitle}</h2>
			<p class="muted-copy mb-8 text-base leading-relaxed md:text-lg">
				{i18n.project.moreText}
			</p>
			<a href="/portfolio" class="btn-primary">{i18n.project.moreCta}</a>
		</div>
	</section>

	{#if selectedImage}
		<div class="image-lightbox" role="dialog" aria-modal="true" aria-label={selectedImage.alt}>
			<button
				type="button"
				class="image-lightbox-backdrop"
				aria-label={closePreviewLabel}
				onclick={closeImage}
			></button>
			<div class="image-lightbox-content">
				<button
					type="button"
					class="image-lightbox-close"
					aria-label={closePreviewLabel}
					onclick={closeImage}
				>
					×
				</button>
				<img src={selectedImage.src} alt={selectedImage.alt} class="image-lightbox-media" />
			</div>
		</div>
	{/if}
{/if}
