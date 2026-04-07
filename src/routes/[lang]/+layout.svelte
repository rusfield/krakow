<script lang="ts">
	import { setContext } from 'svelte';
	import { resolve, base } from '$app/paths';
	import { page } from '$app/state';
	import { getAirbnbUrl, getBookingUrl } from '$lib/external-links';
	import type { LayoutData } from './$types';
	import Gb from 'svelte-flag-icons/Gb.svelte';
	import No from 'svelte-flag-icons/No.svelte';
	import Pl from 'svelte-flag-icons/Pl.svelte';

	let { data, children }: { data: LayoutData; children: import('svelte').Snippet } = $props();

	// Pass reactive getter objects so context consumers stay in sync when data updates on navigation
	setContext('t', {
		get current() {
			return data.t;
		}
	});
	setContext('lang', {
		get current() {
			return data.lang;
		}
	});

	const BOOKING_URL = $derived(getBookingUrl(data.lang));
	const AIRBNB_URL = $derived(getAirbnbUrl(data.lang));

	const langs = ['en', 'no', 'pl'] as const;
	const langMeta: Record<
		string,
		{ label: string; flag: import('svelte').Component; name: string }
	> = {
		en: { label: 'EN', flag: Gb, name: 'English' },
		no: { label: 'NO', flag: No, name: 'Norsk' },
		pl: { label: 'PL', flag: Pl, name: 'Polski' }
	};

	const navLinks = $derived([
		{ href: resolve(`/${data.lang}/about`), label: data.t.nav.links.about },
		{ href: resolve(`/${data.lang}/facilities`), label: data.t.nav.links.facilities },
		{ href: resolve(`/${data.lang}/guest-info`), label: data.t.nav.links.guestInfo },
		{ href: resolve(`/${data.lang}/gallery`), label: data.t.nav.links.gallery },
		{ href: resolve(`/${data.lang}/contact`), label: data.t.nav.links.contact }
	]);

	// Sub-path after /{lang} — e.g. "guest-info" or "" for home
	const subPath = $derived(page.url.pathname.slice(base.length).split('/').slice(2).join('/'));

	const CurrentFlag = $derived(langMeta[data.lang].flag);

	let mobileMenuOpen = $state(false);
	let langDropdownOpen = $state(false);
	let langDropdownEl = $state<HTMLDivElement | undefined>(undefined);

	$effect(() => {
		if (!langDropdownOpen) return;
		function handleClick(e: MouseEvent) {
			if (!langDropdownEl?.contains(e.target as Node)) {
				langDropdownOpen = false;
			}
		}
		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	});
</script>

<header class="sticky top-0 z-50 bg-white shadow-sm">
	<div
		class="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8"
	>
		<!-- Left: Logo / Title -->
		<a href={resolve(`/${data.lang}`)} class="shrink-0 no-underline">
			<span
				class="flex flex-col text-sm leading-tight font-bold tracking-tight text-gray-900 sm:text-base"
			>
				<span>Royal Blue Apartment</span>
				<span>Tauron Arena Cracow</span>
			</span>
		</a>

		<!-- Center: Desktop nav -->
		<nav class="hidden justify-center gap-1 md:flex" aria-label="Main navigation">
			{#each navLinks as link}
				<a
					href={link.href}
					class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<!-- Center placeholder on mobile (keeps grid stable) -->
		<span class="md:hidden"></span>

		<!-- Right: Language switcher + CTA (fixed layout) -->
		<div class="flex shrink-0 items-center gap-2 sm:gap-3">
			<!-- Language dropdown -->
			<div class="relative" bind:this={langDropdownEl}>
				<button
					type="button"
					onclick={() => (langDropdownOpen = !langDropdownOpen)}
					aria-haspopup="listbox"
					aria-expanded={langDropdownOpen}
					class="flex w-[4.5rem] items-center justify-between gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-50 sm:text-sm"
				>
					<span class="flex items-center gap-1.5">
						<CurrentFlag class="h-4 w-5 rounded-sm object-cover" />
						<span>{langMeta[data.lang].label}</span>
					</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="size-3 text-gray-400 transition-transform {langDropdownOpen ? 'rotate-180' : ''}"
					>
						<path
							fill-rule="evenodd"
							d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>

				{#if langDropdownOpen}
					<ul
						role="listbox"
						aria-label="Select language"
						class="absolute top-full right-0 z-50 mt-1.5 min-w-[8rem] overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
					>
						{#each langs as l}
							{@const Flag = langMeta[l].flag}
							<li role="option" aria-selected={l === data.lang}>
								<a
									href={resolve(`/${l}${subPath ? '/' + subPath : ''}`)}
									data-sveltekit-noscroll
									onclick={() => (langDropdownOpen = false)}
									class="flex items-center gap-2.5 px-3 py-2 text-sm transition
										{l === data.lang
										? 'bg-gray-50 font-semibold text-gray-900'
										: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}"
								>
									<Flag class="h-4 w-5 rounded-sm object-cover" />
									<span>{langMeta[l].name}</span>
									{#if l === data.lang}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 16 16"
											fill="currentColor"
											class="ml-auto size-3.5 text-blue-600"
										>
											<path
												fill-rule="evenodd"
												d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
												clip-rule="evenodd"
											/>
										</svg>
									{/if}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</div>

			<!-- CTA Buttons -->
			<div class="hidden items-center gap-2 sm:flex">
				<a
					href={BOOKING_URL}
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-lg bg-blue-600 px-3 py-2 text-center text-xs font-semibold whitespace-nowrap text-white shadow transition hover:bg-blue-700 active:scale-95 sm:px-4 sm:py-2.5 sm:text-sm"
				>
					{data.t.nav.book}
				</a>
				<a
					href={AIRBNB_URL}
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-lg bg-[#FF385C] px-3 py-2 text-center text-xs font-semibold whitespace-nowrap text-white shadow transition hover:bg-[#E31C5F] active:scale-95 sm:px-4 sm:py-2.5 sm:text-sm"
				>
					{data.t.nav.airbnb}
				</a>
			</div>

			<!-- Hamburger (mobile only) -->
			<button
				type="button"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-expanded={mobileMenuOpen}
				aria-controls="mobile-menu"
				aria-label="Toggle navigation menu"
				class="rounded-md p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 md:hidden"
			>
				{#if mobileMenuOpen}
					<!-- X icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="size-5"
					>
						<path
							d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
						/>
					</svg>
				{:else}
					<!-- Hamburger icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="size-5"
					>
						<path
							fill-rule="evenodd"
							d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
							clip-rule="evenodd"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<nav
			id="mobile-menu"
			class="border-t border-gray-100 bg-white px-4 pt-2 pb-3 md:hidden"
			aria-label="Mobile navigation"
		>
			{#each navLinks as link}
				<a
					href={link.href}
					onclick={() => (mobileMenuOpen = false)}
					class="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
				>
					{link.label}
				</a>
			{/each}
		</nav>
	{/if}
</header>

<!-- Mobile FABs: fixed bottom bar with Booking + Airbnb, hidden on sm+ -->
<div class="fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 gap-3 sm:hidden">
	<a
		href={BOOKING_URL}
		target="_blank"
		rel="noopener noreferrer"
		aria-label={data.t.hero.book}
		class="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 active:scale-95"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class="size-4 shrink-0"
		>
			<path
				d="M10.75 16.82A7.462 7.462 0 0 1 10 17c-.34 0-.678-.023-1.01-.068a1 1 0 0 1-.004-1.989 5.5 5.5 0 1 0-4.311-5.57 1 1 0 0 1-1.998-.076A7.5 7.5 0 1 1 10.75 16.82Z"
			/>
			<path d="M10 13.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
			<path
				d="M14.25 4.75a.75.75 0 0 0-1.5 0v1.5h-1.5a.75.75 0 0 0 0 1.5h1.5v1.5a.75.75 0 0 0 1.5 0v-1.5h1.5a.75.75 0 0 0 0-1.5h-1.5v-1.5Z"
			/>
		</svg>
		{data.t.nav.book}
	</a>
	<a
		href={AIRBNB_URL}
		target="_blank"
		rel="noopener noreferrer"
		aria-label={data.t.hero.airbnb}
		class="flex items-center gap-2 rounded-full bg-[#FF385C] px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#E31C5F] active:scale-95"
	>
		<!-- Airbnb Bélo icon (simplified) -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			fill="currentColor"
			class="size-4 shrink-0"
		>
			<path
				d="M16 1C10.925 1 6 6.925 6 13c0 3.313 1.363 6.288 3.5 8.5L16 31l6.5-9.5C24.637 19.288 26 16.313 26 13c0-6.075-4.925-12-10-12zm0 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
			/>
		</svg>
		{data.t.nav.airbnb}
	</a>
</div>

<main>
	{@render children()}
</main>
