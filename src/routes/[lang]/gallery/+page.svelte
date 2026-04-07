<script lang="ts">
	import { asset } from '$app/paths';
	import type { LayoutData } from '../$types';

	let { data }: { data: LayoutData } = $props();
	const t = $derived(data.t);

	function thumbFor(imagePath: string) {
		return imagePath.replace('/images/', '/images/thumbs/').replace(/\.(jpe?g)$/i, '.webp');
	}

	const sections = $derived([
		{
			key: 'bedroom' as const,
			label: t.galleryPage.sections.bedroom,
			images: [1, 2, 3, 4, 6, 25, 26, 27, 28, 29, 30].map((n) => `/images/bedroom/${n}.jpg`)
		},
		{
			key: 'bathroom' as const,
			label: t.galleryPage.sections.bathroom,
			images: [19, 20, 21, 22, 23].map((n) => `/images/bathroom/${n}.jpg`)
		},
		{
			key: 'kitchen' as const,
			label: t.galleryPage.sections.kitchen,
			images: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((n) => `/images/kitchen/${n}.jpg`)
		},
		{
			key: 'hallway' as const,
			label: t.galleryPage.sections.hallway,
			images: [5, 18, 24, 31, 32].map((n) => `/images/hallway/${n}.jpg`)
		},
		{
			key: 'wardrobe' as const,
			label: t.galleryPage.sections.wardrobe,
			images: [48].map((n) => `/images/wardrobe/${n}.jpg`)
		},
		{
			key: 'outside' as const,
			label: t.galleryPage.sections.outside,
			images: [33, 34, 46, 47].map((n) => `/images/outside/${n}.jpg`)
		},
		{
			key: 'krakow' as const,
			label: t.galleryPage.sections.krakow,
			images: [35, 37, 38, 39, 41, 42, 44, 45]
				.map((n) => `/images/krakow/${n}.jpg`)
				.concat([36, 40, 43].map((n) => `/images/krakow/${n}.JPG`))
		}
	]);

	// Lightbox
	let lightboxSrc = $state<string | null>(null);
	let dialogEl = $state<HTMLDialogElement | undefined>(undefined);

	function openLightbox(src: string) {
		lightboxSrc = src;
		dialogEl?.showModal();
	}

	function closeLightbox() {
		lightboxSrc = null;
		dialogEl?.close();
	}

	function onBackdropClick(e: MouseEvent) {
		if (e.target === dialogEl) closeLightbox();
	}
</script>

<section class="bg-gray-50 py-16 sm:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				{t.galleryPage.pageTitle}
			</h1>
		</div>

		<div class="flex flex-col gap-12">
			{#each sections as section}
				<div>
					<h2 class="mb-4 text-xl font-semibold text-gray-800">{section.label}</h2>
					<div class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
						{#each section.images as img}
							<button
								type="button"
								class="group overflow-hidden rounded-lg bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
								onclick={() => openLightbox(asset(img))}
							>
								<img
									src={asset(thumbFor(img))}
									alt="{section.label} photo"
									class="aspect-square w-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-90"
									loading="lazy"
									decoding="async"
									sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
								/>
							</button>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Lightbox -->
<dialog
	bind:this={dialogEl}
	aria-label="Image lightbox"
	class="m-auto max-h-screen max-w-full overflow-visible bg-transparent p-4 backdrop:bg-black/85"
	onclick={onBackdropClick}
>
	<div class="relative flex items-center justify-center">
		<button
			type="button"
			aria-label="Close"
			class="absolute -top-3 -right-3 z-10 rounded-full bg-white/15 p-1.5 text-white transition hover:bg-white/30"
			onclick={closeLightbox}
		>
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
		</button>
		{#if lightboxSrc}
			<img
				src={lightboxSrc}
				alt="Full size preview"
				class="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
				decoding="async"
			/>
		{/if}
	</div>
</dialog>
