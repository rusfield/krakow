<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const t = $derived(data.t);

	import { asset } from '$app/paths';

	const BASE_BOOKING_URL = 'https://www.booking.com/hotel/pl/royal-blue-apartment-tauron-arena-cracow.no.html?aid=356980&label=gog235jc-10CAsotgFCKHJveWFsLWJsdWUtYXBhcnRtZW50LXRhdXJvbi1hcmVuYS1jcmFjb3dICVgDaLYBiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuAK4wNTOBsACAdICJGQ4OTE0OGYzLTVhMTQtNGRjNS1iMGU1LTAzOGFiMWU4NWZmM9gCAeACAQ&sid=b4ca43cfec7be560ba947fe0da43e943&dist=0&keep_landing=1&sb_price_type=total&type=total&activeTab=photosGallery';

	const BOOKING_URL = (() => {
		const today = new Date();
		const fmt = (d: Date) => d.toISOString().slice(0, 10);
		const checkin = fmt(today);
		const checkout = fmt(new Date(today.getTime() + 2 * 86400000));
		return `${BASE_BOOKING_URL}&checkin=${checkin}&checkout=${checkout}`;
	})();

	const AIRBNB_URL = (() => {
		const today = new Date();
		const fmt = (d: Date) => d.toISOString().slice(0, 10);
		const checkin = fmt(today);
		const checkout = fmt(new Date(today.getTime() + 2 * 86400000));
		return `https://www.airbnb.pl/rooms/1649459036475846895?check_in=${checkin}&check_out=${checkout}`;
	})();

	// Icons are presentation-only; titles/descriptions come from the dictionary
	const featureIcons = [
		// Central Location
		`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
			<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
			<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
		</svg>`,
		// Wi-Fi
		`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
			<path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
		</svg>`,
		// Kitchen
		`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
		</svg>`,
		// Self check-in
		`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
			<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 0 1 21.75 8.25Z" />
		</svg>`,
		// Washer
		`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
			<path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 6 0m-6 0H3m16.5 0a3 3 0 0 0 3-3m-3 3a3 3 0 1 1-6 0m6 0h1.5m-7.5 0v-3.375c0-.621.504-1.125 1.125-1.125h.375a1.875 1.875 0 0 1 0 3.75h-.375A1.125 1.125 0 0 1 12 14.25Zm-3-6.75h6m-6 0V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v1.5m-6 0H6.75A2.25 2.25 0 0 0 4.5 9.75v9A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75v-9a2.25 2.25 0 0 0-2.25-2.25H9" />
		</svg>`,
		// Air conditioning
		`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
		</svg>`
	];

	const photos = [
		{ src: asset('/images/1.jpg'), alt: 'Bright living room with modern furnishings and large windows' },
		{ src: asset('/images/4.jpg'), alt: 'Spacious bedroom with a double bed and natural light' },
		{ src: asset('/images/5.jpg'), alt: 'Contemporary kitchen fully equipped with appliances and utensils' },
		{ src: asset('/images/7.jpg'), alt: 'Stylish bathroom with walk-in shower and clean fittings' },
		{ src: asset('/images/19.jpg'), alt: 'Open dining area with a table for four and city views' },
		{ src: asset('/images/33.jpg'), alt: 'Additional view of the apartment interior' }
	];
</script>

<!-- Hero -->
<section
	class="relative flex min-h-[90vh] items-center justify-center bg-gray-800 bg-cover bg-center text-white"
	style="background-image: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('{asset('/images/27.jpg')}')"
>
	<div class="mx-auto max-w-3xl px-4 text-center sm:px-6">
		<p class="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-300 sm:text-base">
			{t.hero.location}
		</p>
		<h1 class="mb-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			{#each t.hero.headline.split('\n') as line, i}
				{#if i > 0}<br />{/if}{line}
			{/each}
		</h1>
		<p class="mb-8 text-lg leading-relaxed text-gray-200 sm:text-xl">
			{t.hero.sub}
		</p>
		<div class="flex flex-wrap justify-center gap-3">
			<a
				href={BOOKING_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-blue-700 active:scale-95 sm:text-lg"
			>
				{t.hero.book}
			</a>
			<a
				href={AIRBNB_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block rounded-xl bg-[#FF385C] px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#E31C5F] active:scale-95 sm:text-lg"
			>
				Book on Airbnb
			</a>
		</div>
	</div>
</section>

<!-- Welcome -->
<section class="bg-white py-20 sm:py-28">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-16 max-w-2xl text-center">
			<h2 class="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				{t.welcome.title}
			</h2>
			<p class="mb-4 text-lg leading-relaxed text-gray-600">{t.welcome.p1}</p>
			<p class="text-lg leading-relaxed text-gray-600">{t.welcome.p2}</p>
		</div>

		<ul class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each t.features as feature, i}
				<li class="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:flex-col sm:gap-3">
					<span class="shrink-0 rounded-xl bg-blue-100 p-3 text-blue-600">
						{@html featureIcons[i]}
					</span>
					<div class="flex flex-col gap-1">
						<h3 class="text-lg font-semibold text-gray-900">{feature.title}</h3>
						<p class="text-sm leading-relaxed text-gray-500">{feature.description}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Gallery -->
<section class="bg-gray-50 py-20 sm:py-28">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-12 max-w-xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				{t.gallery.title}
			</h2>
		</div>

		<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
			<div class="overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-2 lg:row-span-2">
				<img
					src={photos[0].src}
					alt={photos[0].alt}
					class="h-64 w-full object-cover transition duration-300 hover:scale-105 sm:h-80 lg:h-full"
					loading="eager"
				/>
			</div>
			{#each photos.slice(1) as photo}
				<div class="overflow-hidden rounded-2xl">
					<img
						src={photo.src}
						alt={photo.alt}
						class="h-48 w-full object-cover transition duration-300 hover:scale-105 sm:h-56 lg:h-full"
						loading="lazy"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>
