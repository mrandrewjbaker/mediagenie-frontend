export interface tiTMDBMovie {
	id: number;
	title: string;
	posterPath: string;
	[key: string]: any;
}

export interface tiTMDBTV {
	id: number;
	name: string;
	posterPath: string;
	[key: string]: any;
}