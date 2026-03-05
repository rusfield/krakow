import { redirect } from '@sveltejs/kit';
import { dictionaries, isSupportedLang } from '$lib/i18n';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = ({ params }) => {
	const { lang } = params;
	if (!isSupportedLang(lang)) {
		redirect(307, '/en');
	}
	return { lang, t: dictionaries[lang] };
};
