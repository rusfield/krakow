<script lang="ts">
	import type { LayoutData } from '../$types';

	let { data }: { data: LayoutData } = $props();
	const t = $derived(data.t);
</script>

<section class="bg-gray-50 py-16 sm:py-24">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				{t.about.pageTitle}
			</h1>
		</div>

		<div class="rounded-2xl border border-gray-100 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
			<div class="flex flex-col gap-5">
				{#each t.about.paragraphs as paragraph}
					<p class="text-base leading-relaxed text-gray-700">{paragraph}</p>
				{/each}
			</div>
		</div>
	</div>
</section>
