import type { Dictionary } from './types';

const pl: Dictionary = {
	nav: {
		title: 'Royal Blue Apartment Tauron Arena Cracow',
		book: 'Booking.com',
		airbnb: 'Airbnb',
		links: {
			about: 'O apartamencie',
			facilities: 'Wyposażenie',
			guestInfo: 'Zasady pobytu',
			gallery: 'Galeria',
			contact: 'Kontakt'
		}
	},
	hero: {
		location: 'Kraków, Polska',
		headline: 'Royal Blue Apartment\nTauron Arena Cracow',
		sub: 'Jasny, nowoczesny apartament kilka kroków od Starego Miasta – idealna baza do odkrywania jednego z najpiękniejszych miast Europy.',
		book: 'Zarezerwuj na Booking.com',
		airbnb: 'Zarezerwuj na Airbnb'
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
			description:
				'Bądź zawsze online dzięki niezawodnemu łączu światłowodowemu w całym apartamencie.'
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
	guestInfo: {
		pageTitle: 'Zasady pobytu',
		intro: 'Pobyt w apartamencie jest równoznaczny z akceptacją poniższych zasad.',
		sections: [
			{
				title: 'Zameldowanie / Wymeldowanie',
				icon: '🏠',
				items: [
					'Zameldowanie jest możliwe od godz. 15:00. Wcześniejsze zameldowanie musi być uzgodnione z gospodarzem z wyprzedzeniem.',
					'Wymeldowanie następuje do godz. 11:00. Późniejsze wymeldowanie jest możliwe wyłącznie po wcześniejszym uzgodnieniu z gospodarzem. Niezwolnienie apartamentu w wyznaczonym czasie może skutkować dodatkową opłatą.',
					'Przywiązujemy dużą wagę do jakości naszych usług, dlatego prosimy o poszanowanie powierzonego mienia, użytkowanie wszelkiego wyposażenia zgodnie z jego przeznaczeniem oraz pozostawienie apartamentu w podstawowym porządku, tj. wyrzucenie śmieci, umycie brudnych naczyń, zamknięcie okien i zgaszenie świateł.',
					'Po opuszczeniu i zamknięciu apartamentu prosimy o pozostawienie kluczy w skrzynce przy drzwiach wejściowych, resetując kod do 0000, lub o ich zwrot w uprzednio uzgodniony sposób.',
					'W przypadku zgubienia kluczy lub pilota do garażu zostanie naliczona dodatkowa opłata.'
				]
			},
			{
				title: 'Dostęp do apartamentu',
				icon: '🔑',
				items: [
					'Klucze do apartamentu i pilot do garażu – jeśli zarezerwowano miejsce parkingowe – zostaną przekazane zgodnie z informacjami przesłanymi przed przyjazdem (wręczone osobiście przez gospodarza lub odebrane ze skrzynki przy drzwiach wejściowych).',
					'Kod do domofonu i bramy wejściowej zostanie przekazany przed przyjazdem.',
					'Udostępnianie kodów dostępu lub kluczy osobom trzecim jest surowo zabronione.',
					'Apartament musi być zawsze zamknięty na klucz po opuszczeniu. Prosimy o wyłączenie świateł, zamknięcie okien i upewnienie się, że żadne urządzenia domowe nie są pozostawione w trybie pracy, szczególnie pralka, zmywarka lub klimatyzacja.',
					'Można również korzystać z terenów zielonych wokół budynku, w tym z infrastruktury rekreacyjnej.'
				]
			},
			{
				title: 'Wi-Fi',
				icon: '📶',
				items: ['Apartament posiada Wi-Fi. Dane logowania znajdują się wewnątrz.']
			},
			{
				title: 'Cisza nocna i zasady budynku',
				icon: '🔇',
				items: [
					'Cisza nocna w budynku obowiązuje od godz. 22:00 do godz. 06:00.',
					'Organizowanie imprez, zapraszanie niezarejestrowanych gości oraz wszelkie działania mogące zakłócić spokój sąsiadów są surowo zabronione.',
					'Ze względów bezpieczeństwa zabrania się pozostawiania sprzętu i rzeczy osobistych (w tym butów, rowerów, hulajnóg itp.) w częściach wspólnych, z wyjątkiem wyznaczonych miejsc.'
				]
			},
			{
				title: 'Parking',
				icon: '🚗',
				items: [
					'Miejsca parkingowe bezpośrednio przed bramą wejściową i przed budynkiem nie są przypisane do konkretnych apartamentów i mogą być użytkowane w miarę dostępności, zgodnie z przepisami ruchu drogowego. Zabrania się blokowania wiaty śmietnikowej.',
					'Miejsce parkingowe nr 14 jest przypisane do apartamentu. Jest ono dostępne po uprzedniej rezerwacji i za dodatkową opłatą. Parkowanie na innych miejscach w garażu podziemnym jest surowo zabronione.',
					'Pilot do garażu musi zostać zwrócony przy wymeldowaniu wraz z kluczami do apartamentu.',
					'Właściciel nie ponosi odpowiedzialności za uszkodzenia pojazdów.'
				]
			},
			{
				title: 'Liczba gości',
				icon: '👥',
				items: [
					'Apartament przeznaczony jest dla dwóch osób. W apartamencie może przebywać wyłącznie liczba gości określona w rezerwacji.'
				]
			},
			{
				title: 'Zakaz palenia',
				icon: '🚭',
				items: [
					'Palenie tradycyjnych lub elektronicznych papierosów, tytoniu lub jakichkolwiek innych substancji odurzających jest surowo zabronione w apartamencie i na balkonie.',
					'Apartament wyposażony jest w czujnik dymu.'
				]
			},
			{
				title: 'Zwierzęta',
				icon: '🐾',
				items: ['Uwielbiamy zwierzęta, jednak niestety nie są one dozwolone w apartamencie.']
			},
			{
				title: 'Segregacja odpadów',
				icon: '♻️',
				items: [
					'W apartamencie obowiązuje system segregacji odpadów. Kuchnia wyposażona jest w opisane pojemniki na odpady segregowane oraz oddzielny pojemnik na zużyte kapsułki do kawy.',
					'Odpady należy segregować zgodnie z załączonymi wytycznymi.',
					'Wiata śmietnikowa oraz pojemnik na szkło znajdują się bezpośrednio przed budynkiem. Prosimy o regularne wyrzucanie śmieci.'
				]
			},
			{
				title: 'Awarie i usterki',
				icon: '⚠️',
				items: [
					'W przypadku jakiejkolwiek awarii, usterki lub uszkodzenia prosimy o natychmiastowe poinformowanie gospodarza.',
					'Goście ponoszą finansową odpowiedzialność za wszelkie szkody wyrządzone podczas pobytu.'
				]
			},
			{
				title: 'Bezpieczeństwo',
				icon: '🧯',
				items: [
					'Apartament wyposażony jest w czujnik dymu, gaśnicę, koc gaśniczy oraz apteczkę pierwszej pomocy, znajdujące się w oznaczonych miejscach.',
					'W przypadku nagłego zagrożenia prosimy o natychmiastowy kontakt z odpowiednimi służbami ratunkowymi. Lista numerów alarmowych jest załączona.'
				]
			}
		]
	},
	galleryPage: {
		pageTitle: 'Galeria',
		sections: {
			bathroom: 'Łazienka',
			bedroom: 'Sypialnia',
			hallway: 'Korytarz',
			kitchen: 'Kuchnia',
			krakow: 'Kraków',
			outside: 'Na zewnątrz',
			wardrobe: 'Garderoba'
		}
	},
	contact: {
		pageTitle: 'Kontakt',
		intro:
			'Skontaktuj się przez aplikację, z której już korzystasz. Otwórz czat, zadzwoń albo przejdź od razu do apartamentu w wybranej aplikacji map.',
		availability: 'Najszybsza odpowiedź na WhatsAppie',
		shortcutsTitle: 'Skróty do aplikacji',
		tapToOpen: 'Kliknij kartę, aby otworzyć skrót do aplikacji.',
		phone: 'WhatsApp / Telefon',
		email: 'E-mail',
		address: 'Adres',
		apps: {
			whatsapp: 'WhatsApp',
			googleMaps: 'Google Maps',
			appleMaps: 'Apple Maps',
			email: 'E-mail'
		}
	},
	facilities: {
		pageTitle: 'Wyposażenie',
		sections: [
			{
				title: 'Sypialnia',
				icon: '🛏️',
				items: [
					'Łóżko king-size',
					'Szafa z wieszakami',
					'Zasłony zaciemniające',
					'Dodatkowe poduszki i koce'
				]
			},
			{
				title: 'Łazienka',
				icon: '🚿',
				items: [
					'Wanna i prysznic',
					'Ogrzewana podłoga',
					'Suszarka do włosów',
					'Darmowe kosmetyki',
					'Pralka',
					'Ręczniki, szlafroki i kapcie'
				]
			},
			{
				title: 'Kuchnia',
				icon: '🍳',
				items: [
					'Płyta indukcyjna',
					'Piekarnik i mikrofalówka',
					'Lodówka z zamrażarką',
					'Zmywarka',
					'Ekspres do kawy',
					'Pełen zestaw naczyń i sztućców'
				]
			},
			{
				title: 'Salon',
				icon: '🛋️',
				items: ['Smart TV', 'Szybkie Wi-Fi', 'Klimatyzacja', 'Balkon z widokiem na park', 'Biurko']
			},
			{
				title: 'Budynek i parking',
				icon: '🏢',
				items: [
					'Prywatne miejsce parkingowe w garażu podziemnym',
					'Bezpieczne wejście z domofonem',
					'Winda',
					'Ogród i teren zewnętrzny'
				]
			}
		]
	},
	about: {
		pageTitle: 'O apartamencie',
		paragraphs: [
			'Royal Blue Apartment Tauron Arena Cracow to nowoczesny, komfortowy apartament o powierzchni 32 m², idealny dla 2 osób, położony w sercu jednego z najpiękniejszych miast Europy, w którym wieki historii harmonijnie łączą się z tętniącą życiem nowoczesnością. Apartament powstał z dbałością o szczegóły i myślą o wygodzie, spokoju i drobnych przyjemnościach, które sprawiają, że wyjazd nabiera wyjątkowego charakteru.',
			'Apartament oferuje balkon z widokiem na park, klimatyzację, wifi, TV, łazienkę z pralką, suszarką do włosów, ogrzewaną podłogą, wanną/prysznicem i darmowymi kosmetykami, prywatny parking w garażu podziemnym, w pełni wyposażoną kuchnię. Zapewniamy ręczniki, pościel, szlafroki i kapcie. Możliwość zameldowania 24/7 oraz wysoki standard apartamentu zapewniają komfortowy pobyt zarówno turystyczny, jak i służbowy.',
			'Apartament położony jest w Parku Lotników, w bezpośrednim sąsiedztwie Tauron Areny Kraków i Muzeum Lotnictwa Polskiego wraz z terenem dawnego lotniska Rakowice Czyżyny, na posesji z przynależnym do budynku ogrodem oraz ochroną.',
			'Piękna, bardzo spokojna i pełna zieleni okolica oferuje możliwość uprawiania sportu i rekreacji (park wodny, korty tenisowe, zewnętrzne siłownie, skatepark, pole do disc golfa, pętle biegowe i do nordic walking). Jednocześnie zapewnia doskonałe połączenia komunikacyjne z centrum miasta i najważniejszymi atrakcjami Krakowa: 1,0 km do Tauron Areny, 170 m do Muzeum Lotnictwa Polskiego i 500 m do terenu Lotniska Rakowice Czyżyny, 350 m do przystanków tramwajowych do najważniejszych miejsc w całym Krakowie, 11 minut tramwajem do Dworca Kraków Główny, 20 km do Lotniska Kraków Balice.',
			'Kraków zachwyca o każdej porze roku: historią zapisaną w murach Rynku Głównego i Wawelu, zapierającą dech w piersiach architekturą, klimatem nastrojowych uliczek Kazimierza, bogactwem kawiarni, restauracji, wydarzeń kulturalnych, muzycznych i sportowych oraz magią i urokiem miejsc nieoczywistych, a Apartament Royal Blue jest doskonałą bazą, by korzystać z tej obfitości w Państwa własnym rytmie. Niezależnie od tego, czy są Państwo tu po raz pierwszy, czy wracają do Krakowa kolejny raz, miasto zawsze ma coś wyjątkowego do zaoferowania.',
			'Mam nadzieję, że pobyt tu pozwoli Państwu w pełni poczuć atmosferę Królewskiego Miasta Krakowa oraz odkryć jego tajemnice i smaki.'
		]
	}
};

export default pl;
