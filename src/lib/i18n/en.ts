import type { Dictionary } from './types';

const en: Dictionary = {
	nav: {
		title: 'Krakow Apartment',
		book: 'Book on Booking.com'
	},
	hero: {
		location: 'Krakow, Poland',
		headline: 'Your Home in the\nHeart of Krakow',
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
	rules: {
		title: 'House Rules',
		subtitle: 'To ensure a great stay for everyone, please take a moment to review our house rules.',
		items: [
			{ allowed: true, text: 'Check-in: 3:00 PM – 10:00 PM' },
			{ allowed: true, text: 'Check-out: by 11:00 AM' },
			{ allowed: true, text: 'Suitable for families with children' },
			{ allowed: true, text: 'Long stays welcome' },
			{ allowed: false, text: 'No smoking anywhere on the premises' },
			{ allowed: false, text: 'No parties or events' },
			{ allowed: false, text: 'No pets' },
			{ allowed: false, text: 'Quiet hours: 10:00 PM – 8:00 AM' }
		]
	}
};

export default en;
