import type { Locale } from '$lib/i18n';
import type { Project } from '$lib/types';

type MarkdownModule = {
	default: unknown;
	metadata: Record<string, any>;
};

const aboutModules = import.meta.glob('/src/content/about.*.md');
const projectModules = import.meta.glob('/src/content/projects/*.md');

async function loadLocalizedModule(
	modules: Record<string, () => Promise<unknown>>,
	candidates: string[]
): Promise<MarkdownModule> {
	for (const candidate of candidates) {
		const loader = modules[candidate];
		if (loader) {
			return (await loader()) as MarkdownModule;
		}
	}

	throw new Error(`Missing localized content for ${candidates.join(', ')}`);
}

export async function loadAboutContent(locale: Locale) {
	return loadLocalizedModule(aboutModules, [
		`/src/content/about.${locale}.md`,
		'/src/content/about.en.md'
	]);
}

export async function loadProjectContent(slug: string, locale: Locale) {
	return loadLocalizedModule(projectModules, [
		`/src/content/projects/${slug}.${locale}.md`,
		`/src/content/projects/${slug}.en.md`
	]);
}

export async function loadProjectSummaries(locale: Locale): Promise<Project[]> {
	const englishPaths = Object.keys(projectModules).filter((path) => path.endsWith('.en.md'));

	const projects = await Promise.all(
		englishPaths.map(async (path) => {
			const slug = path.split('/').at(-1)?.replace('.en.md', '');
			if (!slug) return null;

			const project = await loadProjectContent(slug, locale);
			const metadata = project.metadata as Omit<Project, 'slug' | 'content'>;

			return {
				...metadata,
				slug
			} satisfies Project;
		})
	);

	return projects
		.filter((project): project is Project => Boolean(project?.published))
		.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());
}
