import type { SupportedLang } from '$lib/i18n';

const AIRBNB_LOCALE_BY_SITE_LANG = {
	en: 'en',
	no: 'no',
	pl: 'pl'
} as const satisfies Record<SupportedLang, string>;

const BOOKING_SHARE_URL = 'https://www.booking.com/Share-rj2S63V';
const AIRBNB_ROOM_ID = '1649459036475846895';

export function getBookingUrl(_lang: SupportedLang) {
	return BOOKING_SHARE_URL;
}

export function getAirbnbUrl(lang: SupportedLang) {
	const url = new URL(`https://www.airbnb.com/rooms/${AIRBNB_ROOM_ID}`);
	url.searchParams.set('locale', AIRBNB_LOCALE_BY_SITE_LANG[lang]);
	return url.toString();
}
