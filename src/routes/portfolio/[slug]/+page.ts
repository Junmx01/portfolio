import { error } from '@sveltejs/kit';
import { loadProjectContent } from '$lib/content/localized';
import { defaultLocale } from '$lib/i18n';

export async function load({ params }) {
	try {
		const project = await loadProjectContent(params.slug, defaultLocale);
		return {
			slug: params.slug,
			content: project.default,
			meta: project.metadata
		};
	} catch (e) {
		console.error(e);
		error(404, `Could not find ${params.slug}, ${e instanceof Error ? e.message : 'Unknown error'}`);
	}
}
