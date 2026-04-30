import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Locale = 'en' | 'zh' | 'es';

export const defaultLocale: Locale = 'en';
export const localeStorageKey = 'portfolio-locale';

export const languages = [
	{ code: 'en' as const, label: 'English', shortLabel: 'EN' },
	{ code: 'zh' as const, label: '中文', shortLabel: '中' },
	{ code: 'es' as const, label: 'Español', shortLabel: 'ES' }
];

export const locale = writable<Locale>(defaultLocale);

export function isLocale(value: string | null | undefined): value is Locale {
	return value === 'en' || value === 'zh' || value === 'es';
}

function syncLocaleSideEffects(value: Locale) {
	if (!browser) return;

	localStorage.setItem(localeStorageKey, value);
	document.documentElement.lang = value;
}

function getPreferredBrowserLocale(): Locale {
	if (!browser) return defaultLocale;

	const candidates = [navigator.language, ...navigator.languages];
	for (const candidate of candidates) {
		const normalized = candidate?.toLowerCase();
		if (!normalized) continue;

		if (normalized.startsWith('zh')) return 'zh';
		if (normalized.startsWith('es')) return 'es';
		if (normalized.startsWith('en')) return 'en';
	}

	return defaultLocale;
}

export function initLocale() {
	if (!browser) return;

	const storedLocale = localStorage.getItem(localeStorageKey);
	const nextLocale = isLocale(storedLocale) ? storedLocale : getPreferredBrowserLocale();
	locale.set(nextLocale);
	syncLocaleSideEffects(nextLocale);
}

export function setLocale(value: Locale) {
	locale.set(value);
	syncLocaleSideEffects(value);
}

export function interpolate(
	template: string,
	values: Record<string, string | number | undefined>
) {
	return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''));
}
