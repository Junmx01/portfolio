<script lang="ts">
	import { locale } from '$lib/i18n';
	import { messages } from '$lib/i18n/copy';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitted = $state(false);
	let loading = $state(false);
	let error = $state('');
	const i18n = $derived(messages[$locale].form);

	async function handleSubmit(event: Event) {
		event.preventDefault();

		loading = true;
		error = '';

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name,
					email,
					message
				})
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(typeof result.error === 'string' ? result.error : i18n.genericError);
			}

			submitted = true;
			name = '';
			email = '';
			message = '';
		} catch (err) {
			error = err instanceof Error ? err.message : i18n.unexpectedError;
		} finally {
			loading = false;
		}
	}

	function resetForm() {
		submitted = false;
		error = '';
		name = '';
		email = '';
		message = '';
	}
</script>

<div class="surface-panel px-6 py-8 md:px-8">
	<p class="eyebrow-link mb-3 text-xs">{i18n.eyebrow}</p>
	<h3 class="page-title mb-6 text-3xl lowercase md:text-4xl">{i18n.title}</h3>

	{#if submitted}
		<div class="py-8 text-center">
			<div class="btn-primary inline-flex w-auto">{i18n.successTitle}</div>
			<p class="muted-copy mt-4 text-sm md:text-base">
				{i18n.successText}
			</p>
			<button onclick={resetForm} class="mt-4 text-sm underline transition-colors hover:text-accent">
				{i18n.reset}
			</button>
		</div>
	{:else}
		<form onsubmit={handleSubmit} class="space-y-6">
			{#if error}
				<div class="rounded-2xl border border-red-300 bg-red-50 p-4">
					<p class="text-sm text-red-700">{error}</p>
				</div>
			{/if}

			<div>
				<label for="name" class="mb-2 block text-sm font-bold lowercase">{i18n.nameLabel}</label>
				<input
					type="text"
					id="name"
					bind:value={name}
					required
					disabled={loading}
					class="form-field w-full p-3 disabled:cursor-not-allowed"
					placeholder={i18n.namePlaceholder}
				/>
			</div>

			<div>
				<label for="email" class="mb-2 block text-sm font-bold lowercase">{i18n.emailLabel}</label>
				<input
					type="email"
					id="email"
					bind:value={email}
					required
					disabled={loading}
					class="form-field w-full p-3 disabled:cursor-not-allowed"
					placeholder={i18n.emailPlaceholder}
				/>
			</div>

			<div>
				<label for="message" class="mb-2 block text-sm font-bold lowercase">{i18n.messageLabel}</label>
				<textarea
					id="message"
					bind:value={message}
					required
					rows="5"
					disabled={loading}
					class="form-field w-full resize-none p-3 disabled:cursor-not-allowed"
					placeholder={i18n.messagePlaceholder}
				></textarea>
			</div>

			<div>
				<button
					type="submit"
					disabled={loading}
					class="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
				>
					{#if loading}
						<svg class="h-4 w-4 animate-spin" viewBox="0 0 24 24">
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
								fill="none"
							></circle>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
						{i18n.sending}
					{:else}
						{i18n.submit}
					{/if}
				</button>
			</div>
		</form>
	{/if}
</div>
