export interface Dictionary {
	nav: {
		title: string;
		book: string;
		airbnb: string;
		links: {
			about: string;
			facilities: string;
			guestInfo: string;
			gallery: string;
			contact: string;
		};
	};
	hero: {
		location: string;
		headline: string;
		sub: string;
		book: string;
		airbnb: string;
	};
	welcome: {
		title: string;
		p1: string;
		p2: string;
	};
	features: Array<{
		title: string;
		description: string;
	}>;
	guestInfo: {
		pageTitle: string;
		intro: string;
		sections: Array<{
			title: string;
			icon: string;
			items: string[];
		}>;
	};
	about: {
		pageTitle: string;
		paragraphs: string[];
	};
	galleryPage: {
		pageTitle: string;
		sections: {
			bathroom: string;
			bedroom: string;
			hallway: string;
			kitchen: string;
			krakow: string;
			outside: string;
			wardrobe: string;
		};
	};
	contact: {
		pageTitle: string;
		phone: string;
		email: string;
		address: string;
	};
	facilities: {
		pageTitle: string;
		sections: Array<{
			title: string;
			icon: string;
			items: string[];
		}>;
	};
}
