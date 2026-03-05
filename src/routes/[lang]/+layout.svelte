<script lang="ts">
	import { setContext } from 'svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { LayoutData } from './$types';
	import Gb from 'svelte-flag-icons/Gb.svelte';
	import No from 'svelte-flag-icons/No.svelte';
	import Pl from 'svelte-flag-icons/Pl.svelte';

	let { data, children }: { data: LayoutData; children: import('svelte').Snippet } = $props();

	// Pass reactive getter objects so context consumers stay in sync when data updates on navigation
	setContext('t', { get current() { return data.t; } });
	setContext('lang', { get current() { return data.lang; } });

	const BOOKING_URL = 'https://www.booking.com';

	const langs = ['en', 'no', 'pl'] as const;
	const langMeta: Record<string, { label: string; flag: import('svelte').Component; name: string }> = {
		en: { label: 'EN', flag: Gb, name: 'English' },
		no: { label: 'NO', flag: No, name: 'Norsk' },
		pl: { label: 'PL', flag: Pl, name: 'Polski' }
	};

	const navLinks = $derived([
		{ href: resolve(`/${data.lang}`), label: 'Home' },
		{ href: resolve(`/${data.lang}/guide`), label: 'Krakow Guide' },
		{ href: resolve(`/${data.lang}/guest-info`), label: 'Guest Info' }
	]);

	// Sub-path after /{lang} — e.g. "guest-info" or "" for home
	const subPath = $derived(page.url.pathname.split('/').slice(2).join('/'));

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
	<div class="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
		<!-- Left: Logo / Title -->
		<a href={resolve(`/${data.lang}`)} class="shrink-0 no-underline">
			<span class="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
				{data.t.nav.title}
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
						<path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
					</svg>
				</button>

				{#if langDropdownOpen}
					<ul
						role="listbox"
						aria-label="Select language"
						class="absolute right-0 top-full z-50 mt-1.5 min-w-[8rem] overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
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
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="ml-auto size-3.5 text-blue-600">
											<path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
										</svg>
									{/if}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</div>

			<!-- CTA Button — min-w prevents text-length changes from shifting adjacent elements -->
			<a
				href={BOOKING_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="hidden min-w-[7rem] whitespace-nowrap rounded-lg bg-blue-600 px-3 py-2 text-center text-xs font-semibold text-white shadow transition hover:bg-blue-700 active:scale-95 sm:inline-block sm:min-w-[10rem] sm:px-4 sm:py-2.5 sm:text-sm"
			>
				{data.t.nav.book}
			</a>

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
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
						<path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
					</svg>
				{:else}
					<!-- Hamburger icon -->
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
						<path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<nav
			id="mobile-menu"
			class="border-t border-gray-100 bg-white px-4 pb-3 pt-2 md:hidden"
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

<!-- Mobile FAB: Book button fixed to bottom-right, hidden on sm+ -->
<a
	href={BOOKING_URL}
	target="_blank"
	rel="noopener noreferrer"
	aria-label={data.t.nav.book}
	class="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 active:scale-95 sm:hidden"
>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4 shrink-0">
		<path d="M10.75 16.82A7.462 7.462 0 0 1 10 17c-.34 0-.678-.023-1.01-.068a1 1 0 0 1-.004-1.989 5.5 5.5 0 1 0-4.311-5.57 1 1 0 0 1-1.998-.076A7.5 7.5 0 1 1 10.75 16.82Z" />
		<path d="M10 13.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
		<path d="M14.25 4.75a.75.75 0 0 0-1.5 0v1.5h-1.5a.75.75 0 0 0 0 1.5h1.5v1.5a.75.75 0 0 0 1.5 0v-1.5h1.5a.75.75 0 0 0 0-1.5h-1.5v-1.5Z" />
	</svg>
	Book
</a>

<main>
	{@render children()}
</main>
