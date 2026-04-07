<script lang="ts">
	import type { LayoutData } from '../$types';

	let { data }: { data: LayoutData } = $props();
	const t = $derived(data.t);

	const introParagraph = $derived(t.about.paragraphs[0] ?? '');
	const bodySections = $derived(
		[t.about.paragraphs.slice(1, 3), t.about.paragraphs.slice(3, 5)].filter(
			(section) => section.length > 0
		)
	);
	const closingParagraph = $derived(t.about.paragraphs.at(-1) ?? '');
</script>

<section class="bg-transparent py-16 sm:py-24">
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				{t.about.pageTitle}
			</h1>
		</div>

		<div class="space-y-6">
			<div class="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
				<div class="px-6 py-8 sm:px-10 sm:py-10">
					<p class="text-lg leading-8 text-gray-800 sm:text-xl">{introParagraph}</p>
				</div>
			</div>

			<div class="space-y-6">
				{#each bodySections as section}
					<div class="rounded-2xl border border-gray-100 bg-white px-6 py-8 shadow-sm sm:px-10">
						<div class="flex flex-col gap-5">
							{#each section as paragraph}
								<p class="text-base leading-relaxed text-gray-700">{paragraph}</p>
							{/each}
						</div>
					</div>
				{/each}

				{#if closingParagraph}
					<div class="rounded-2xl border border-gray-100 bg-white px-6 py-8 shadow-sm sm:px-8">
						<p class="text-base leading-relaxed text-gray-700">
							{closingParagraph}
						</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
