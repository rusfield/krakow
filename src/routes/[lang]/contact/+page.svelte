<script lang="ts">
	import type { LayoutData } from '../$types';

	let { data }: { data: LayoutData } = $props();
	const t = $derived(data.t);
</script>

<section class="bg-gray-50 py-16 sm:py-24">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				{t.contact.pageTitle}
			</h1>
		</div>

		<div class="flex flex-col gap-4">
			<!-- WhatsApp / Phone -->
			<div class="rounded-2xl border border-gray-100 bg-white px-6 py-5 shadow-sm">
				<div class="flex items-start gap-4">
					<div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
							<path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
						</svg>
					</div>
					<div>
						<p class="mb-1 text-sm font-semibold text-gray-500">{t.contact.phone}</p>
						<a href="tel:+48516106136" class="text-lg font-bold text-gray-900 transition hover:text-green-600">
							+48 516 106 136
						</a>
						<div class="mt-1">
							<a
								href="https://wa.me/48516106136"
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1.5 text-sm font-medium text-green-600 transition hover:text-green-700"
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
									<path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.985-1.418A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18a7.952 7.952 0 0 1-4.031-1.094l-.29-.172-2.957.841.842-2.883-.189-.297A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8Zm4.406-5.884c-.242-.121-1.432-.707-1.654-.788-.22-.08-.38-.12-.54.121-.16.242-.622.788-.763.949-.14.16-.281.18-.522.06-.242-.12-1.02-.375-1.944-1.197-.718-.64-1.203-1.43-1.344-1.671-.14-.242-.015-.373.106-.493.108-.108.242-.282.362-.422.12-.141.16-.242.242-.403.08-.16.04-.302-.02-.422-.06-.121-.54-1.3-.739-1.782-.195-.468-.393-.404-.54-.412l-.46-.008c-.16 0-.42.06-.64.302-.22.242-.84.821-.84 2.002 0 1.18.86 2.32.98 2.48.12.16 1.692 2.583 4.1 3.62.573.248 1.02.395 1.368.506.575.183 1.098.157 1.511.095.46-.068 1.432-.585 1.633-1.15.202-.564.202-1.047.141-1.148-.06-.1-.22-.16-.462-.281Z"/>
								</svg>
								WhatsApp
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Email -->
			<div class="rounded-2xl border border-gray-100 bg-white px-6 py-5 shadow-sm">
				<div class="flex items-start gap-4">
					<div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
							<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
							<path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
						</svg>
					</div>
					<div>
						<p class="mb-1 text-sm font-semibold text-gray-500">{t.contact.email}</p>
						<a
							href="mailto:royalbluecracow@gmail.com"
							class="text-lg font-bold text-gray-900 transition hover:text-blue-600"
						>
							royalbluecracow@gmail.com
						</a>
					</div>
				</div>
			</div>

			<!-- Address -->
			<div class="rounded-2xl border border-gray-100 bg-white px-6 py-5 shadow-sm">
				<div class="flex items-start gap-4">
					<div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
							<path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 1 0-16 0c0 3.63 1.556 6.326 3.5 8.327a19.583 19.583 0 0 0 2.856 2.293 16.975 16.975 0 0 0 .797.51Zm0 0ZM12 13.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" clip-rule="evenodd" />
						</svg>
					</div>
					<div>
						<p class="mb-1 text-sm font-semibold text-gray-500">{t.contact.address}</p>
						<address class="not-italic">
							<p class="text-lg font-bold text-gray-900">Mariana Markowskiego 15</p>
							<p class="text-base font-bold text-gray-900">31-881 KRAKÓW</p>
						</address>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
