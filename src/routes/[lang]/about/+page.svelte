<script lang="ts">
	import type { LayoutData } from '../$types';

	let { data }: { data: LayoutData } = $props();
	const t = $derived(data.t);

	const aboutSections = $derived(
		[
			t.about.paragraphs.slice(0, 2),
			t.about.paragraphs.slice(2, 4),
			t.about.paragraphs.slice(4)
		].filter((section) => section.length > 0)
	);
</script>

<section class="bg-transparent py-16 sm:py-24">
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				{t.about.pageTitle}
			</h1>
		</div>

		<div class="space-y-6">
			{#each aboutSections as section}
				<div class="rounded-2xl border border-gray-100 bg-white px-6 py-8 shadow-sm sm:px-10">
					<div class="flex flex-col gap-5">
						{#each section as paragraph}
							<p class="text-base leading-relaxed text-gray-700">
								{paragraph}
							</p>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
