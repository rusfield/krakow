export const CONTACT_PHONE_DISPLAY = '+48 516 106 136';
export const CONTACT_PHONE_E164 = '+48516106136';
export const CONTACT_EMAIL = 'royalbluecracow@gmail.com';

export const CONTACT_ADDRESS_LINES = ['Mariana Markowskiego 15', '31-881 Krakow'] as const;

const CONTACT_ADDRESS_QUERY = 'Mariana Markowskiego 15, 31-881 Krakow, Poland';

export function getPhoneUrl() {
	return `tel:${CONTACT_PHONE_E164}`;
}

export function getWhatsAppUrl() {
	return `https://wa.me/${CONTACT_PHONE_E164.replace('+', '')}`;
}

export function getMailtoUrl() {
	return `mailto:${CONTACT_EMAIL}`;
}

export function getGoogleMapsUrl() {
	const url = new URL('https://www.google.com/maps/search/');
	url.searchParams.set('api', '1');
	url.searchParams.set('query', CONTACT_ADDRESS_QUERY);
	return url.toString();
}

export function getAppleMapsUrl() {
	const url = new URL('https://maps.apple.com/');
	url.searchParams.set('q', CONTACT_ADDRESS_QUERY);
	return url.toString();
}
