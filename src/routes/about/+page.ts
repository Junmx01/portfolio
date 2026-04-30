import { error } from '@sveltejs/kit';
import { loadAboutContent } from '$lib/content/localized';
import { defaultLocale } from '$lib/i18n';

export const load = async () => {
	try {
		const about = await loadAboutContent(defaultLocale);
		return {
			content: about.default,
			meta: about.metadata
		};
	} catch (e) {
		console.error(e);
		error(404, `Could not find about, ${e instanceof Error ? e.message : 'Unknown error'}`);
	}
};
