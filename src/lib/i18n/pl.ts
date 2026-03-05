import type { Dictionary } from './types';

const pl: Dictionary = {
	nav: {
		title: 'Apartament w Krakowie',
		book: 'Zarezerwuj na Booking.com'
	},
	hero: {
		location: 'Kraków, Polska',
		headline: 'Twój dom w sercu\nKrakowa',
		sub: 'Jasny, nowoczesny apartament kilka kroków od Starego Miasta – idealna baza do odkrywania jednego z najpiękniejszych miast Europy.',
		book: 'Zarezerwuj na Booking.com'
	},
	welcome: {
		title: 'Witamy w apartamencie',
		p1: 'Zaledwie dwie minuty pieszo od legendarnego Rynku Głównego w Krakowie, ten stylowy apartament przyjmuje do czterech gości w pełnym komforcie. Słoneczne pokoje, wysokiej jakości meble i przemyślane detale sprawiają, że poczujesz się jak w domu od pierwszej chwili.',
		p2: 'Niezależnie od tego, czy przyjeżdżasz na krótki wypad, wycieczkę kulturalną czy dłuższy pobyt, znajdziesz tu wszystko, czego potrzebujesz – od w pełni wyposażonej kuchni po błyskawiczne Wi-Fi – abyś mógł skupić się na tworzeniu wspomnień w jednym z najpiękniejszych miast Europy.'
	},
	features: [
		{
			title: 'Centralna lokalizacja',
			description: 'Kilka kroków od Rynku Głównego i najważniejszych atrakcji Krakowa.'
		},
		{
			title: 'Szybkie Wi-Fi',
			description: 'Bądź zawsze online dzięki niezawodnemu łączu światłowodowemu w całym apartamencie.'
		},
		{
			title: 'W pełni wyposażona kuchnia',
			description: 'Gotuj w domu z nowoczesną kuchnią wyposażoną we wszystko, czego potrzebujesz.'
		},
		{
			title: 'Samodzielne zameldowanie',
			description: 'Elastyczny przyjazd dzięki inteligentnemu zamkowi – bez czekania na gospodarza.'
		},
		{
			title: 'Pralka i suszarka',
			description: 'Pralnia w apartamencie na dłuższe pobyty – podróżuj lekko.'
		},
		{
			title: 'Klimatyzacja',
			description: 'Ciesz się chłodem latem i ciepłem zimą dzięki klimatyzacji w każdym pokoju.'
		}
	],
	gallery: {
		title: 'Wnętrze apartamentu'
	},
	rules: {
		title: 'Zasady domu',
		subtitle: 'Aby zapewnić komfortowy pobyt wszystkim gościom, prosimy o zapoznanie się z zasadami.',
		items: [
			{ allowed: true, text: 'Zameldowanie: 15:00 – 22:00' },
			{ allowed: true, text: 'Wymeldowanie: do 11:00' },
			{ allowed: true, text: 'Odpowiednie dla rodzin z dziećmi' },
			{ allowed: true, text: 'Dłuższe pobyty mile widziane' },
			{ allowed: false, text: 'Zakaz palenia w całym obiekcie' },
			{ allowed: false, text: 'Zakaz imprez i wydarzeń' },
			{ allowed: false, text: 'Zwierzęta niedozwolone' },
			{ allowed: false, text: 'Cisza nocna: 22:00 – 08:00' }
		]
	}
};

export default pl;
