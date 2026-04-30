import { json } from '@sveltejs/kit';
import { defaultLocale, isLocale } from '$lib/i18n';
import { loadProjectSummaries } from '$lib/content/localized';
import type { Project } from '$lib/types';

export async function GET({ url }) {
	const lang = url.searchParams.get('lang');
	const locale = isLocale(lang) ? lang : defaultLocale;
	const projects = await loadProjectSummaries(locale);
	return json(projects);
}
