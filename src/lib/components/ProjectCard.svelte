<script lang="ts">
	import type { Project } from '$lib/types';
	import { locale } from '$lib/i18n';
	import { messages } from '$lib/i18n/copy';

	let { project }: { project: Project } = $props();
	const i18n = $derived(messages[$locale].card);
</script>

<article class="surface-panel project-card relative p-0">
	<a href="/portfolio/{project.slug}" class="project-card-overlay" aria-label={project.title}></a>

	<div class="aspect-[4/3] overflow-hidden bg-highlight">
		<img
			src="/content/images/projects/{project.thumbnail}"
			alt={project.title}
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</div>

	<div class="project-card-body p-6">
		<div class="mb-3">
			<h3 class="project-card-title page-title mb-2 text-2xl lowercase">
				{project.title}
			</h3>
			<p class="project-card-description muted-copy text-sm md:text-base">{project.description}</p>
			{#if project.result}
				<p class="mt-2 text-sm font-medium text-accent">→ {project.result}</p>
			{/if}
		</div>

		{#if project.tags && project.tags.length > 0}
			<div class="project-card-tags mb-4 flex flex-wrap gap-2">
				{#each project.tags as tag}
					<span class="soft-tag px-3 py-1 text-xs uppercase tracking-wide">
						{tag}
					</span>
				{/each}
			</div>
		{/if}

		<div class="mt-auto flex items-center justify-between">
			<span class="eyebrow-link text-sm font-bold transition-colors hover:text-primary-dark">
				{i18n.viewCaseStudy}
			</span>

			<div class="relative z-10 flex items-center space-x-3">
				{#if project.link}
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						class="muted-copy text-xs uppercase tracking-wide transition-colors hover:text-primary-dark"
						aria-label={i18n.liveAria}
					>
						{i18n.liveLabel}
					</a>
				{/if}
				{#if project.github}
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						class="muted-copy text-xs uppercase tracking-wide transition-colors hover:text-primary-dark"
						aria-label={i18n.codeAria}
					>
						{i18n.codeLabel}
					</a>
				{/if}
			</div>
		</div>
	</div>
</article>
