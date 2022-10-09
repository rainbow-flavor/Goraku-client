export interface Store {
	id: number;
	name: string;
	address: string;
	city1: string;
	city2: string;
	isop: true;
	uptime: string;
	contact: string;
	twitter: string;
	website: string;
	latitude: string;
	longitude: string;
	networkType: StoreNetwork;
	storeMachines: Machine[];
}

export type StoreNetwork = {
	k: boolean;
	n: boolean;
	s: boolean;
	t: boolean;
	a: boolean;
};

export interface Machine {
	id: number;
	koName: string;
	enName: string;
	shortName: string;
	category: string;
	company: string;
	description: string;
	parent: {
		id: 5;
		koName: string;
		enName: string;
		shortName: string;
		category: string;
		company: string;
		description: string;
		// parent: null;
	};
}
