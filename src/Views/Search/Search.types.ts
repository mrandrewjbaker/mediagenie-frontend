export type tSearchStatus = "idle" | "loading" | "success" | "error";


export interface tiSearchState {
	basic: {
		data: any[];
		status: tSearchStatus;
	};
	movies: {
		data: any[];
		status: tSearchStatus;
	};
	tv: {
		data: any[];
		status: tSearchStatus;
	};
	people: {
		data: any[];
		status: tSearchStatus;
	};
}