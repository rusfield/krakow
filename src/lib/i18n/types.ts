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
}
