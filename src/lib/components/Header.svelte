<script>
	import { page } from '$app/state';
	import { locale, languages, setLocale } from '$lib/i18n';
	import { messages } from '$lib/i18n/copy';
	import { getSiteConfig } from '$lib/utils/content';

	const config = getSiteConfig();
	let isMenuOpen = $state(false);
	const i18n = $derived(messages[$locale].header);

	let hidden = $state(false);
	let lastScrollY = 0;

	$effect(() => {
		function onScroll() {
			const currentScrollY = window.scrollY;
			if (currentScrollY < 80) {
				hidden = false;
			} else if (currentScrollY > lastScrollY) {
				hidden = true;
				isMenuOpen = false;
			} else {
				hidden = false;
			}
			lastScrollY = currentScrollY;
		}

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header
	class="site-header sticky top-0 z-10"
	style:transform={hidden ? 'translateY(-100%)' : 'translateY(0)'}
	style:transition="transform 0.3s ease"
>
	<nav class="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between">
			<!-- Logo/Name -->
			<a
				href="/"
				class="brand-mark"
			>
				{config.name}
			</a>

			<!-- Navigation Links -->
			<div class="hidden items-center gap-4 md:flex">
				<div class="lang-switch" aria-label={i18n.languageLabel}>
					{#each languages as language}
						<button
							type="button"
							class="lang-option"
							class:lang-option-active={$locale === language.code}
							aria-label={language.label}
							aria-pressed={$locale === language.code}
							onclick={() => setLocale(language.code)}
						>
							{language.shortLabel}
						</button>
					{/each}
				</div>
				<a
					href="/portfolio"
					class="nav-chip text-base"
					class:nav-chip-active={page.url.pathname.startsWith('/portfolio')}
				>
					{i18n.portfolio}
				</a>
				<a
					href="/about"
					class="nav-chip text-base"
					class:nav-chip-active={page.url.pathname === '/about'}
				>
					{i18n.about}
				</a>
				<a
					href="/contact"
					class="nav-chip text-base"
					class:nav-chip-active={page.url.pathname === '/contact'}
				>
					{i18n.contact}
				</a>
				{#if config.resumeUrl}
					<a href={config.resumeUrl} download class="btn-secondary">{i18n.resume}</a>
				{/if}
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="mobile-toggle p-2 md:hidden"
				id="mobile-menu-button"
				aria-label={i18n.mobileMenu}
				aria-expanded={isMenuOpen}
				onclick={() => {
					isMenuOpen = !isMenuOpen;
				}}
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</button>
		</div>

		<!-- Mobile Menu -->
		<div
			class="mt-4 hidden border-t border-line pb-4 pt-4 md:hidden"
			id="mobile-menu"
			class:hidden={!isMenuOpen}
		>
			<div class="flex flex-col space-y-4">
				<div class="lang-switch w-fit" aria-label={i18n.languageLabel}>
					{#each languages as language}
						<button
							type="button"
							class="lang-option"
							class:lang-option-active={$locale === language.code}
							aria-label={language.label}
							aria-pressed={$locale === language.code}
							onclick={() => setLocale(language.code)}
						>
							{language.shortLabel}
						</button>
					{/each}
				</div>
				<div>
					<a
						href="/portfolio"
						class="nav-chip text-base"
						class:nav-chip-active={page.url.pathname.startsWith('/portfolio')}
					>
						{i18n.portfolio}
					</a>
				</div>
				<div>
					<a
						href="/about"
						class="nav-chip text-base"
						class:nav-chip-active={page.url.pathname === '/about'}
					>
						{i18n.about}
					</a>
				</div>
				<div>
					<a
						href="/contact"
						class="nav-chip text-base"
						class:nav-chip-active={page.url.pathname === '/contact'}
					>
						{i18n.contact}
					</a>
				</div>
				{#if config.resumeUrl}
					<div>
						<a href={config.resumeUrl} download class="btn-secondary">{i18n.resume}</a>
					</div>
				{/if}
			</div>
		</div>
	</nav>
</header>
