<script lang="ts">
	import Icon from '@iconify/svelte';
	import {
		CONTACT_ADDRESS_LINES,
		CONTACT_EMAIL,
		CONTACT_PHONE_DISPLAY,
		getAppleMapsUrl,
		getGoogleMapsUrl,
		getMailtoUrl,
		getWhatsAppUrl
	} from '$lib/contact-info';
	import type { LayoutData } from '../$types';

	let { data }: { data: LayoutData } = $props();
	const t = $derived(data.t);

	const EMAIL_URL = getMailtoUrl();
	const GOOGLE_MAPS_URL = getGoogleMapsUrl();
	const APPLE_MAPS_URL = getAppleMapsUrl();
	const WHATSAPP_URL = getWhatsAppUrl();

	const shortcutClass =
		'inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 sm:w-48';
</script>

<section class="bg-transparent py-16 sm:py-24">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				{t.contact.pageTitle}
			</h1>
		</div>

		<div class="flex flex-col gap-6">
			<div class="rounded-2xl border border-gray-100 bg-white px-6 py-5 shadow-sm">
				<div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
					<div class="min-w-0">
						<h2 class="mb-3 flex items-center gap-2.5 text-lg font-semibold text-gray-900">
							<Icon icon="lucide:phone-call" class="size-5 text-blue-700" />
							{t.contact.phone}
						</h2>
						<p class="text-lg font-semibold text-gray-900">{CONTACT_PHONE_DISPLAY}</p>
						<p class="mt-1 text-sm text-gray-500">{t.contact.availability}</p>
					</div>

					<div class="w-full sm:w-48 sm:shrink-0">
						<a
							href={WHATSAPP_URL}
							target="_blank"
							rel="noopener noreferrer"
							class={`${shortcutClass} text-green-700`}
						>
							<Icon icon="simple-icons:whatsapp" class="size-4" />
							{t.contact.apps.whatsapp}
						</a>
					</div>
				</div>
			</div>

			<div class="rounded-2xl border border-gray-100 bg-white px-6 py-5 shadow-sm">
				<div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
					<div class="min-w-0">
						<h2 class="mb-3 flex items-center gap-2.5 text-lg font-semibold text-gray-900">
							<Icon icon="lucide:mail" class="size-5 text-blue-700" />
							{t.contact.email}
						</h2>
						<p class="text-lg font-semibold break-words text-gray-900">{CONTACT_EMAIL}</p>
					</div>

					<div class="w-full sm:w-48 sm:shrink-0">
						<a href={EMAIL_URL} class={`${shortcutClass} text-blue-700`}>
							<Icon icon="lucide:mail" class="size-4" />
							{t.contact.apps.email}
						</a>
					</div>
				</div>
			</div>

			<div class="rounded-2xl border border-gray-100 bg-white px-6 py-5 shadow-sm">
				<div class="flex flex-col gap-5 sm:flex-row sm:justify-between">
					<div class="min-w-0">
						<h2 class="mb-3 flex items-center gap-2.5 text-lg font-semibold text-gray-900">
							<Icon icon="lucide:map-pinned" class="size-5 text-blue-700" />
							{t.contact.address}
						</h2>
						<address class="not-italic">
							<p class="text-lg font-semibold text-gray-900">{CONTACT_ADDRESS_LINES[0]}</p>
							<p class="text-base text-gray-600">{CONTACT_ADDRESS_LINES[1]}</p>
						</address>
					</div>

					<div class="flex w-full flex-col gap-3 sm:w-48 sm:shrink-0 sm:self-center">
						<a
							href={GOOGLE_MAPS_URL}
							target="_blank"
							rel="noopener noreferrer"
							class={`${shortcutClass} text-rose-700`}
						>
							<Icon icon="mdi:google-maps" class="size-4" />
							{t.contact.apps.googleMaps}
						</a>
						<!--
						<a
							href={APPLE_MAPS_URL}
							target="_blank"
							rel="noopener noreferrer"
							class={`${shortcutClass} text-gray-800`}
						>
							<Icon icon="simple-icons:apple" class="size-4" />
							{t.contact.apps.appleMaps}
						</a>
						-->
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
