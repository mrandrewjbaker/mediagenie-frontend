import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBasicSearch, getMoviesSearch, getTVSearch } from "./Search.api";
import { tAppStore } from "../../App/AppStore/AppStore";
import { tiSearchState } from "./Search.types";


const initialSearchState: tiSearchState = {
	basic: {
		data: [],
		status: "idle",
	},
  movies: {
		data: [],
		status: "idle",
	},
	tv: {
		data: [],
		status: "idle",
	},
	people: {
		data: [],
		status: "idle",
	},
}

export const getBasicSearchAsync = createAsyncThunk(
	'search/getBasicSearchAsync',
	async ({
		searchString,
		page,
	}: {
		searchString: string,
		page: number,
	}) => {
		const response = await getBasicSearch(searchString, page);
		return response.data.results;
	}
);

export const getMoviesSearchAsync = createAsyncThunk(
	'search/getMoviesSearchAsync',
	async ({
		searchString,
		page,
	}: {
		searchString: string,
		page: number,
	}) => {
		const response = await getMoviesSearch(searchString, page);
		return response.data.results;
	}
);

export const getTVSearchAsync = createAsyncThunk(
	'search/getTVSearchAsync',
	async ({
		searchString,
		page,
	}: {
		searchString: string,
		page: number,
	}) => {
		const response = await getTVSearch(searchString, page);
		return response.data.results;
	}
);

export const SearchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
		
  },
	extraReducers: (builder) => {
		builder
		.addCase(getBasicSearchAsync.pending, (state) => {
			state.basic.status = "loading";
		})
		.addCase(getBasicSearchAsync.fulfilled, (state, action) => {
			state.basic.status = "success"
			state.basic.data = action.payload;
		})
		.addCase(getBasicSearchAsync.rejected, (state) => {
			state.basic.status = "error";
		})
		.addCase(getMoviesSearchAsync.pending, (state) => {
			state.movies.status = "loading";
		})
		.addCase(getMoviesSearchAsync.fulfilled, (state, action) => {
			state.movies.status = "success"
			state.movies.data = action.payload;
		})
		.addCase(getMoviesSearchAsync.rejected, (state) => {
			state.movies.status = "error";
		})
		.addCase(getTVSearchAsync.pending, (state) => {
			state.tv.status = "loading";
		})
		.addCase(getTVSearchAsync.fulfilled, (state, action) => {
			state.tv.status = "success"
			state.tv.data = action.payload;
		})
		.addCase(getTVSearchAsync.rejected, (state) => {
			state.tv.status = "error";
		})
	}
});

export const { } = SearchSlice.actions;
export const selectSearchState = (state: tAppStore) => state.search;
export default SearchSlice.reducer;
