<script>
	import { locale } from '$lib/i18n';
	import { messages } from '$lib/i18n/copy';
	import { getSiteConfig } from '$lib/utils/content';

	const config = getSiteConfig();
	const i18n = $derived(messages[$locale]);
</script>

<footer class="mx-4 mb-4 mt-20 sm:mx-6 lg:mx-8">
	<div class="surface-panel surface-panel-strong mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-10">
		<div class="grid grid-cols-1 gap-10 md:grid-cols-3">
			<div>
				<p class="eyebrow-link mb-3 text-xs">{i18n.footer.contactEyebrow}</p>
				<h3 class="page-title mb-4 text-2xl">{i18n.footer.contactTitle}</h3>
				<div class="space-y-2">
					<p class="text-base leading-relaxed md:text-lg">
						<a href="mailto:{config.email}" class="footer-link">
							{config.email}
						</a>
					</p>
					{#if config.location}
						<p class="muted-copy text-sm md:text-base">{i18n.site.location}</p>
					{/if}
				</div>
			</div>

			<div>
				<p class="eyebrow-link mb-3 text-xs">{i18n.footer.navigateEyebrow}</p>
				<h3 class="page-title mb-4 text-2xl">{i18n.footer.navigateTitle}</h3>
				<div class="space-y-2">
					<p><a href="/portfolio" class="footer-link text-base md:text-lg">{i18n.header.portfolio}</a></p>
					<p><a href="/about" class="footer-link text-base md:text-lg">{i18n.header.about}</a></p>
					<p><a href="/contact" class="footer-link text-base md:text-lg">{i18n.header.contact}</a></p>
				</div>
			</div>

			<div>
				<p class="eyebrow-link mb-3 text-xs">{i18n.footer.connectEyebrow}</p>
				<h3 class="page-title mb-4 text-2xl">{i18n.footer.connectTitle}</h3>
				<div class="space-y-2">
					{#if config.social.github}
						<p>
							<a
								href="https://github.com/{config.social.github}"
								class="footer-link text-base md:text-lg"
								target="_blank"
								rel="noopener noreferrer"
							>
								github
							</a>
						</p>
					{/if}
					{#if config.social.linkedin}
						<p>
							<a
								href="https://linkedin.com/in/{config.social.linkedin}"
								class="footer-link text-base md:text-lg"
								target="_blank"
								rel="noopener noreferrer"
							>
								linkedin
							</a>
						</p>
					{/if}
					{#if config.social.twitter}
						<p>
							<a
								href="https://twitter.com/{config.social.twitter}"
								class="footer-link text-base md:text-lg"
								target="_blank"
								rel="noopener noreferrer"
							>
								twitter
							</a>
						</p>
					{/if}
					{#if config.social.instagram}
						<p>
							<a
								href="https://instagram.com/{config.social.instagram}"
								class="footer-link text-base md:text-lg"
								target="_blank"
								rel="noopener noreferrer"
							>
								instagram
							</a>
						</p>
					{/if}
				</div>
			</div>
		</div>

		<div class="mt-8 border-t border-line pt-6 text-center">
			<p class="muted-copy text-sm md:text-base">
				Copyright {new Date().getFullYear()} {config.name}. {i18n.footer.copyright}
			</p>
		</div>
	</div>
</footer>
