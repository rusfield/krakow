import type { Dictionary } from './types';

const no: Dictionary = {
	nav: {
		title: 'Royal Blue Apartment Tauron Arena Cracow',
		book: 'Booking.com',
		airbnb: 'Airbnb',
		links: {
			about: 'Om oss',
			facilities: 'Fasiliteter',
			guestInfo: 'Husregler',
			gallery: 'Galleri',
			contact: 'Kontakt'
		}
	},
	hero: {
		location: 'Krakow, Polen',
		headline: 'Royal Blue Apartment\nTauron Arena Cracow',
		sub: 'En lys, moderne leilighet noen sekunder fra gamlebyen – det perfekte utgangspunktet for å utforske en av Europas vakreste byer.',
		book: 'Book på Booking.com',
		airbnb: 'Book på Airbnb'
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
	guestInfo: {
		pageTitle: 'Husregler',
		intro: 'Ved å oppholde seg i leiligheten aksepterer man følgende regler.',
		sections: [
			{
				title: 'Innsjekk / Utsjekk',
				icon: '🏠',
				items: [
					'Innsjekk er mulig fra kl. 15:00. Tidlig innsjekk må avtales med verten på forhånd.',
					'Utsjekk er innen kl. 11:00. Sen utsjekk er kun mulig etter avtale med verten. Manglende fraflytting av leiligheten til rett tid kan medføre et tilleggsgebyr.',
					'Vi legger stor vekt på kvaliteten på våre tjenester, og ber deg derfor om å respektere den betrodde eiendommen, bruke alt utstyr i samsvar med dets tiltenkte formål, og forlate leiligheten i grunnleggende orden – kast søppelet, vask brukte oppvask, lukk vinduene og slå av lysene.',
					'Etter at du har forlatt og låst leiligheten, vennligst legg nøklene i nøkkelboksen ved inngangsdøren og still koden tilbake til 0000, eller lever dem på en tidligere avtalt måte.',
					'Ved tap av nøkler eller garasjefjernkontroll vil det bli belastet et tilleggsgebyr.'
				]
			},
			{
				title: 'Tilgang til leiligheten',
				icon: '🔑',
				items: [
					'Leilighetsnøklene og garasjefjernkontrollen – dersom parkeringsplass er reservert – vil bli utlevert som spesifisert i informasjonen mottatt før ankomst (enten overlevert personlig av verten eller hentet fra nøkkelboksen ved inngangsdøren).',
					'Kode til interntelefon og inngangsport vil bli oppgitt før ankomst.',
					'Det er strengt forbudt å dele tilgangskoder eller nøkler med tredjeparter.',
					'Leiligheten må alltid låses når man forlater den. Vennligst slå av lysene, lukk vinduene og sørg for at ingen husholdningsapparater er igjen i drift, spesielt vaskemaskin, oppvaskmaskin eller klimaanlegg.',
					'Du kan også benytte grøntarealet rundt bygningen, inkludert dens rekreasjonstilbud.'
				]
			},
			{
				title: 'Wi-Fi',
				icon: '📶',
				items: ['Leiligheten har Wi-Fi. Påloggingsinformasjonen finnes inne i leiligheten.']
			},
			{
				title: 'Stille timer og bygningsregler',
				icon: '🔇',
				items: [
					'Stille timer i bygningen er fra kl. 22:00 til kl. 06:00.',
					'Fester, invitasjon av uregistrerte gjester og alle aktiviteter som kan forstyrre naboer er strengt forbudt.',
					'Av sikkerhetsmessige årsaker er det forbudt å etterlate utstyr og personlige gjenstander (inkludert sko, sykler, sparkesykler osv.) i fellesarealer, bortsett fra i anvisede områder.'
				]
			},
			{
				title: 'Parkering',
				icon: '🚗',
				items: [
					'Parkeringsplasser direkte foran inngangsportalen og foran bygningen er ikke tildelt spesifikke leiligheter og kan benyttes etter tilgjengelighet og i samsvar med trafikkreglene. Det er forbudt å blokkere søppelskuret.',
					'Parkeringsplass nr. 14 er tildelt leiligheten. Den er tilgjengelig etter forhåndsreservasjon og mot et tilleggsgebyr. Parkering på andre plasser i undergrunnsgarasjen er strengt forbudt.',
					'Garasjefjernkontrollen må returneres ved avreise sammen med leilighetsnøklene.',
					'Eieren er ikke ansvarlig for skader på kjøretøy.'
				]
			},
			{
				title: 'Antall gjester',
				icon: '👥',
				items: [
					'Leiligheten er beregnet for to personer. Kun det antall gjester som er angitt i reservasjonen, er tillatt å overnatte i leiligheten.'
				]
			},
			{
				title: 'Røykeforbud',
				icon: '🚭',
				items: [
					'Røyking av tradisjonelle eller elektroniske sigaretter, tobakk eller andre berusende stoffer er strengt forbudt i leiligheten og på balkongen.',
					'Leiligheten er utstyrt med en røykvarsler.'
				]
			},
			{
				title: 'Kjæledyr',
				icon: '🐾',
				items: ['Vi er glad i dyr, men kjæledyr er dessverre ikke tillatt i leiligheten.']
			},
			{
				title: 'Kildesortering',
				icon: '♻️',
				items: [
					'Det er et kildesorteringssystem i leiligheten. Kjøkkenet er utstyrt med merkede søppelbøtter for sortert avfall og en egen beholder for brukte kaffekapslere.',
					'Avfall må sorteres i henhold til vedlagte retningslinjer.',
					'Et søppelskur og en glassbeholder befinner seg rett foran bygningen. Vennligst kast søppel regelmessig.'
				]
			},
			{
				title: 'Nødsituasjoner',
				icon: '⚠️',
				items: [
					'Ved feil, mangler eller skader, vennligst informer verten umiddelbart.',
					'Gjester er økonomisk ansvarlige for eventuelle skader som oppstår under oppholdet.'
				]
			},
			{
				title: 'Sikkerhet',
				icon: '🧯',
				items: [
					'Leiligheten er utstyrt med røykvarsler, brannslukker, brannteppe og en førstehjelpskit plassert på merkede steder.',
					'I tilfelle nødsituasjon, vennligst kontakt de aktuelle nødetatene umiddelbart. En liste over nødnumre er vedlagt.'
				]
			}
		]
	},
	galleryPage: {
		pageTitle: 'Galleri',
		sections: {
			bathroom: 'Bad',
			bedroom: 'Soverom',
			hallway: 'Gang',
			kitchen: 'Kjøkken',
			krakow: 'Kraków',
			outside: 'Utenfor',
			wardrobe: 'Garderobe'
		}
	},
	contact: {
		pageTitle: 'Kontakt',
		phone: 'WhatsApp / Telefon',
		email: 'E-post',
		address: 'Adresse'
	},
	facilities: {
		pageTitle: 'Fasiliteter',
		sections: [
			{
				title: 'Soverom',
				icon: '🛏️',
				items: [
					'King-size seng',
					'Garderobe med kleshengere',
					'Mørkleggingsgardiner',
					'Ekstra puter og pledd'
				]
			},
			{
				title: 'Bad',
				icon: '🚿',
				items: [
					'Badekar og dusj',
					'Gulvvarme',
					'Hårtørker',
					'Gratis toalettsaker',
					'Vaskemaskin',
					'Håndklær, badekåper og tøfler'
				]
			},
			{
				title: 'Kjøkken',
				icon: '🍳',
				items: [
					'Induksjonstopp',
					'Stekeovn og mikrobølgeovn',
					'Kjøleskap med fryser',
					'Oppvaskmaskin',
					'Kaffemaskin',
					'Fullt sett med kokekar og bestikk'
				]
			},
			{
				title: 'Stue',
				icon: '🛋️',
				items: [
					'Smart-TV',
					'Høyhastighets Wi-Fi',
					'Klimaanlegg',
					'Balkong med utsikt over parken',
					'Skrivebord'
				]
			},
			{
				title: 'Bygning og parkering',
				icon: '🏢',
				items: [
					'Privat parkeringsplass i underjordisk garasje',
					'Sikker inngang med interntelefon',
					'Heis',
					'Hage og uteareal'
				]
			}
		]
	},
	about: {
		pageTitle: 'Om leiligheten',
		paragraphs: [
			'Royal Blue Apartment Tauron Arena Cracow er en moderne, komfortabel leilighet på 32 m², ideell for 2 personer, beliggende i hjertet av en av Europas vakreste byer, der århundrers historie harmonisk møter et pulserende moderne byliv. Leiligheten er skapt med stor oppmerksomhet for detaljer, med fokus på komfort, ro og de små nytelsene som gjør et opphold virkelig minneverdig.',
			'Leiligheten har balkong med utsikt over parken, klimaanlegg, Wi-Fi, TV, bad med vaskemaskin, hårtørker, gulvvarme, badekar/dusj og gratis toalettsaker, fullt utstyrt kjøkken, samt privat parkering i underjordisk garasje. Vi tilbyr håndklær, sengetøy, badekåper og tøfler. Innsjekk 24/7 og høy standard sikrer et komfortabelt opphold, enten du er på ferie eller forretningsreise.',
			'Leiligheten ligger i Flygerparken (Park Lotników), i umiddelbar nærhet til Tauron Arena Kraków og Polsk Luftfartsmuseum, samt det tidligere Rakowice-Czyżyny-flyplassområdet, på en eiendom med tilhørende hage og vakthold.',
			'De vakre, svært rolige og grønne omgivelsene byr på mange muligheter for sport og rekreasjon (vannpark, tennisbaner, utendørs treningsapparater, skatepark, discgolfbane, løpe- og nordicwalkingruter). Samtidig gir beliggenheten utmerkede transportforbindelser til bysentrum og Kraków viktigste severdigheter: 1,0 km til Tauron Arena, 170 m til Polsk Luftfartsmuseum og 500 m til Rakowice-Czyżyny-flyplassområdet, 350 m til trikkeholdeplasser med direkte forbindelser til sentrale steder i hele Kraków, 11 minutters trikketur til Kraków Główny jernbanestasjon, og 20 km til Kraków Balice lufthavn.',
			'Kraków fascinerer besøkende til enhver tid på året – med historien inngravert i steinene på Stortorget og Wawelborgen, betagende arkitektur, de stemningsfulle gatene i Kazimierz, et rikt utvalg av kafeer og restauranter, tallrike kulturelle, musikalske og sportslige arrangementer, samt magien og sjarmen ved byens skjulte perler. Royal Blue Apartment er det ideelle utgangspunktet for å utforske denne rikdommen i eget tempo. Enten dette er ditt første besøk eller et kjærkomment gjensyn, har Kraków alltid noe eksepsjonelt å by på.',
			'Jeg håper oppholdet ditt her vil gi deg muligheten til å fullt ut oppleve atmosfæren i den kongelige byen Kraków og oppdage dens skatter og smaker.'
		]
	}
};

export default no;
