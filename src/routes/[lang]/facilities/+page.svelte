<script lang="ts">
	import type { LayoutData } from '../$types';

	let { data }: { data: LayoutData } = $props();
	const t = $derived(data.t);
</script>

<section class="bg-transparent py-16 sm:py-24">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				{t.facilities.pageTitle}
			</h1>
		</div>

		<div class="flex flex-col gap-6">
			{#each t.facilities.sections as section}
				<div class="rounded-2xl border border-gray-100 bg-white px-6 py-5 shadow-sm">
					<h2 class="mb-3 flex items-center gap-2.5 text-lg font-semibold text-gray-900">
						<span class="text-xl leading-none">{section.icon}</span>
						{section.title}
					</h2>
					<ul class="flex flex-col gap-2">
						{#each section.items as item}
							<li class="flex gap-2 text-sm leading-relaxed text-gray-600">
								<span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-400"></span>
								{item}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>
