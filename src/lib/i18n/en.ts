import type { Dictionary } from './types';

const en: Dictionary = {
	nav: {
		title: 'Royal Blue Apartment Tauron Arena Cracow',
		book: 'Book on Booking.com'
	},
	hero: {
		location: 'Krakow, Poland',
		headline: 'Royal Blue Apartment\nTauron Arena Cracow',
		sub: "A bright, modern apartment seconds from the Old Town — the perfect base for exploring one of Europe's most beautiful cities.",
		book: 'Book on Booking.com'
	},
	welcome: {
		title: 'Welcome to the Apartment',
		p1: "Nestled just two minutes' walk from Krakow's legendary Market Square, this stylish apartment sleeps up to four guests in comfort. Sunlit rooms, quality furnishings, and thoughtful touches throughout make it feel like home from the moment you arrive.",
		p2: "Whether you're here for a city break, a cultural tour, or an extended stay, you'll find everything you need — from a fully equipped kitchen to blazing-fast Wi-Fi — so you can focus on making memories in one of Europe's most captivating cities."
	},
	features: [
		{
			title: 'Central Location',
			description: 'Steps from the Old Town Market Square and top Krakow attractions.'
		},
		{
			title: 'High-Speed Wi-Fi',
			description: 'Stay connected with reliable fibre broadband throughout the apartment.'
		},
		{
			title: 'Fully Equipped Kitchen',
			description: 'Cook at home with a modern kitchen stocked with all the essentials.'
		},
		{
			title: 'Self Check-in',
			description: 'Flexible arrival with a smart lock — no need to wait for a host.'
		},
		{
			title: 'Washer & Dryer',
			description: 'In-unit laundry for longer stays — travel light and wash on-site.'
		},
		{
			title: 'Air Conditioning',
			description: 'Stay cool in summer and cosy in winter with climate control in every room.'
		}
	],
	gallery: {
		title: 'Inside the Apartment'
	},
	guestInfo: {
		pageTitle: 'House Rules',
		intro: 'Staying in the apartment constitutes acceptance of the following rules.',
		sections: [
			{
				title: 'Check-in / Check-out',
				icon: '🏠',
				items: [
					'Check-in is possible from 3:00 PM. Early check-in must be agreed upon in advance with the host.',
					'Check-out is by 11:00 AM. Late check-out is possible only upon prior arrangement with the host. Failure to vacate the apartment on time may result in an additional charge.',
					'We place great importance on the quality of our services; therefore, we kindly ask you to respect the entrusted property, use all equipment in accordance with its intended purpose, and leave the apartment in basic order, i.e. take out the trash, wash used dishes, close the windows, and turn off the lights.',
					'After leaving and locking the apartment, please leave the keys in the lockbox by the entrance door, resetting the code to 0000, or return them in a previously agreed manner.',
					'In the event of loss of keys or the garage remote control, an additional fee will be charged.'
				]
			},
			{
				title: 'Access to the Apartment',
				icon: '🔑',
				items: [
					'The apartment keys and the garage remote control – if a parking space has been reserved – will be provided as specified in the information received prior to arrival (either handed over personally by the host or collected from the lockbox by the entrance door).',
					'The intercom and entrance gate code will be provided prior to your arrival.',
					'Sharing access codes or keys with third parties is strictly prohibited.',
					'The apartment must always be locked when leaving. Please turn off the lights, close the windows, and ensure that no household appliances are left running, especially the washing machine, dishwasher, or air conditioner.',
					'You may also use the green area around the building, including its recreational features.'
				]
			},
			{
				title: 'Wi-Fi',
				icon: '📶',
				items: ['The apartment has Wi-Fi. Credentials can be found inside.']
			},
			{
				title: 'Quiet Hours and Building Rules',
				icon: '🔇',
				items: [
					'Quiet hours in the building are from 10:00 PM to 6:00 AM.',
					'Parties, inviting unregistered guests, and any activities that may disturb neighbors are strictly prohibited.',
					'For safety reasons, leaving equipment and personal items (including shoes, bicycles, scooters, etc.) in common areas is prohibited, except in designated areas.'
				]
			},
			{
				title: 'Parking',
				icon: '🚗',
				items: [
					'Parking spaces directly in front of the entrance gate and in front of the building are not assigned to specific apartments and may be used subject to availability and in accordance with traffic regulations. Blocking the garbage shelter is prohibited.',
					'Parking space No. 14 is assigned to the apartment. It is available upon prior reservation and for an additional fee. Parking in any other spaces in the underground garage is strictly prohibited.',
					'The garage remote control must be returned upon departure together with the apartment keys.',
					'The owner is not responsible for any damage to vehicles.'
				]
			},
			{
				title: 'Number of Guests',
				icon: '👥',
				items: [
					'The apartment is intended for two persons. Only the number of guests specified in the reservation is allowed to stay in the apartment.'
				]
			},
			{
				title: 'No Smoking',
				icon: '🚭',
				items: [
					'Smoking traditional or electronic cigarettes, tobacco, or any other intoxicating substances is strictly prohibited in the apartment and on the balcony.',
					'The apartment is equipped with a smoke detector.'
				]
			},
			{
				title: 'Pets',
				icon: '🐾',
				items: ['We love animals; however, pets are not allowed in the apartment.']
			},
			{
				title: 'Waste Sorting',
				icon: '♻️',
				items: [
					'A waste sorting system is in place in the apartment. The kitchen is equipped with labeled bins for separated waste and a separate container for used coffee capsules.',
					'Waste must be sorted according to the attached guidelines.',
					'A garbage shelter and a glass waste container are located directly in front of the building. Please dispose of waste regularly.'
				]
			},
			{
				title: 'Emergencies',
				icon: '⚠️',
				items: [
					'In the event of any malfunction, defect, or damage, please inform the host immediately.',
					'Guests are financially responsible for any damage caused during their stay.'
				]
			},
			{
				title: 'Safety',
				icon: '🧯',
				items: [
					'The apartment is equipped with a smoke detector, fire extinguisher, fire blanket, and a first aid kit located in marked places.',
					'In case of emergency, please contact the appropriate emergency services immediately. A list of emergency numbers is attached.'
				]
			},
		]
	},
	galleryPage: {
		pageTitle: 'Gallery',
		sections: {
			bathroom: 'Bathroom',
			bedroom: 'Bedroom',
			hallway: 'Hallway',
			kitchen: 'Kitchen',
			krakow: 'Kraków',
			outside: 'Outside',
			wardrobe: 'Wardrobe'
		}
	},
	contact: {
		pageTitle: 'Contact',
		phone: 'WhatsApp / Phone',
		email: 'Email',
		address: 'Address'
	},
	facilities: {
		pageTitle: 'Facilities',
		sections: [
			{
				title: 'Bedroom',
				icon: '🛏️',
				items: ['King-size bed', 'Wardrobe with hangers', 'Blackout curtains', 'Extra pillows and blankets']
			},
			{
				title: 'Bathroom',
				icon: '🚿',
				items: ['Bathtub and shower', 'Underfloor heating', 'Hairdryer', 'Complimentary toiletries', 'Washing machine', 'Towels, bathrobes, and slippers']
			},
			{
				title: 'Kitchen',
				icon: '🍳',
				items: ['Induction hob', 'Oven and microwave', 'Fridge and freezer', 'Dishwasher', 'Coffee machine', 'Full set of cookware and utensils']
			},
			{
				title: 'Living Area',
				icon: '🛋️',
				items: ['Smart TV', 'High-speed Wi-Fi', 'Air conditioning', 'Balcony with park view', 'Work desk']
			},
			{
				title: 'Building & Parking',
				icon: '🏢',
				items: ['Private parking space in underground garage', 'Secure entrance with intercom', 'Lift', 'Garden and outdoor area']
			}
		]
	},
	about: {
		pageTitle: 'About the Apartment',
		paragraphs: [
			'Royal Blue Apartment Tauron Arena Cracow is a modern, comfortable 32 m² apartment, ideal for 2 people, located in the heart of one of the most beautiful cities in Europe, where centuries of history blend harmoniously with vibrant modern life. The Apartment was created with great attention to detail and comfort, tranquility, and those touches of indulgence in mind that transform a simple stay into a memorable experience.',
			'The apartment features a balcony overlooking the park, air conditioning, Wi-Fi, TV, a bathroom with a washing machine, hairdryer, underfloor heating, bathtub/shower, and complimentary toiletries, a fully equipped kitchen, as well as private parking in an underground garage. We provide towels, bed linen, bathrobes, and slippers. 24/7 check-in and the high standard of the apartment ensure a comfortable stay, whether for tourism or business.',
			'It is situated in the Park of Polish Aviators, in the immediate vicinity of Tauron Arena Kraków and the Polish Aviation Museum, along with the grounds of the former Rakowice-Czyżyny airfield, within a property that includes a private garden and security.',
			'The beautiful, very peaceful and green surroundings offer plenty of opportunities for sports and recreation (water park, tennis courts, outdoor gyms, skatepark, disc golf course, running and Nordic walking trails). At the same time, the location provides excellent transport connections to the city center and Kraków\'s main attractions: 1.0 km to Tauron Arena, 170 m to the Polish Aviation Museum and 500 m to the Rakowice-Czyżyny airfield area, 350 m to tram stops with direct access to key locations across Kraków, 11 minutes by tram to Kraków Główny railway station, and 20 km to Kraków Balice Airport.',
			'Kraków enchants visitors at any time of year – with history etched into the stones of the Main Market Square and Wawel Castle, breathtaking architecture, the atmospheric streets of Kazimierz, an abundance of cafés and restaurants, numerous cultural, musical, and sporting events, as well as the magic and charm of its hidden gems. The Royal Blue Apartment offers an ideal setting from which to explore this richness at your own pace. Whether this is your first visit or a long-awaited return, Kraków always has something exceptional to offer.',
			'I hope your stay here will allow you to fully experience the atmosphere of the Royal City of Kraków and discover its treasures and flavors.'
		]
	}
};

export default en;
