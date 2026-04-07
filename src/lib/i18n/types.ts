export interface Dictionary {
	nav: {
		title: string;
		book: string;
	};
	hero: {
		location: string;
		headline: string;
		sub: string;
		book: string;
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
	gallery: {
		title: string;
	};
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
