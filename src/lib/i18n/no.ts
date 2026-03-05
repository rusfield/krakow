import type { Dictionary } from './types';

const no: Dictionary = {
	nav: {
		title: 'Krakow-leilighet',
		book: 'Book på Booking.com'
	},
	hero: {
		location: 'Krakow, Polen',
		headline: 'Ditt hjem i hjertet\nav Krakow',
		sub: 'En lys, moderne leilighet noen sekunder fra gamlebyen – det perfekte utgangspunktet for å utforske en av Europas vakreste byer.',
		book: 'Book på Booking.com'
	},
	welcome: {
		title: 'Velkommen til leiligheten',
		p1: 'Bare to minutters gange fra Krakovs legendariske Stortorg ligger denne stilfulle leiligheten med plass til fire gjester i komfort. Solrike rom, kvalitetsmøbler og gjennomtenkte detaljer gjør at du føler deg hjemme fra første stund.',
		p2: 'Enten du er her for en bytur, en kulturreise eller et lengre opphold, finner du alt du trenger – fra et fullt utstyrt kjøkken til lynrask Wi-Fi – slik at du kan fokusere på å skape minner i en av Europas mest fascinerende byer.'
	},
	features: [
		{
			title: 'Sentral beliggenhet',
			description: 'Rett ved Gammelbytorget og Krakovs beste attraksjoner.'
		},
		{
			title: 'Høyhastighets Wi-Fi',
			description: 'Hold deg tilkoblet med pålitelig fiberbredbånd i hele leiligheten.'
		},
		{
			title: 'Fullt utstyrt kjøkken',
			description: 'Lag mat hjemme med et moderne kjøkken som har alt du trenger.'
		},
		{
			title: 'Selvinnsjekk',
			description: 'Fleksibel ankomst med smart lås – ingen grunn til å vente på verten.'
		},
		{
			title: 'Vaskemaskin og tørketrommel',
			description: 'Vask på stedet for lengre opphold – reis lett og vask lokalt.'
		},
		{
			title: 'Klimaanlegg',
			description: 'Hold deg kjølig om sommeren og koselig om vinteren med klimakontroll.'
		}
	],
	gallery: {
		title: 'Inne i leiligheten'
	},
	rules: {
		title: 'Husregler',
		subtitle: 'For å sikre et godt opphold for alle, vennligst ta deg tid til å lese husreglene.',
		items: [
			{ allowed: true, text: 'Innsjekk: 15:00 – 22:00' },
			{ allowed: true, text: 'Utsjekk: innen 11:00' },
			{ allowed: true, text: 'Egnet for familier med barn' },
			{ allowed: true, text: 'Lengre opphold er velkomment' },
			{ allowed: false, text: 'Ingen røyking inne' },
			{ allowed: false, text: 'Ingen fester eller arrangementer' },
			{ allowed: false, text: 'Ingen kjæledyr' },
			{ allowed: false, text: 'Stilletid: 22:00 – 08:00' }
		]
	}
};

export default no;
