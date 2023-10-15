import axios from "axios";

export const getBasicSearch = async (searchString: string, page: number) => {
	return await axios.get(`${process.env.REACT_APP_MGAPI_URL}/tmdb/search?keyword=${searchString}&page=${page}`);
}

export const getMoviesSearch = async (searchString: string, page: number) => {
	return await axios.get(`${process.env.REACT_APP_MGAPI_URL}/tmdb/search/movies?keyword=${searchString}&page=${page}`);
}

export const getTVSearch = async (searchString: string, page: number) => {
	return await axios.get(`${process.env.REACT_APP_MGAPI_URL}/tmdb/search/tv?keyword=${searchString}&page=${page}`);
}