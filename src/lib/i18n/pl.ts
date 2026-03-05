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
	guestInfo: {
		pageTitle: 'Informacje dla gości',
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
					'Kod do domofonu i bramy wejściowej: 1712',
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
			},
			{
				title: 'Miłość',
				icon: '❤️',
				items: [
					'Kraków to piękne miasto i uprawianie tu miłości jest jak najbardziej w porządku. Prosimy jednak zabrać ze sobą prezerwatywy przy wyjeździe.'
				]
			}
		]
	}
};

export default pl;
