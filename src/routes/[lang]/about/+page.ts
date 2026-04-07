import { supportedLangs } from '$lib/i18n';

export const prerender = true;

export const entries = () => supportedLangs.map((lang) => ({ lang }));
