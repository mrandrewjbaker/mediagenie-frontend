import axios from 'axios';

export const getMediaBoxMovieInformationById = async (id: number) => {
	return await axios.get(`${process.env.REACT_APP_TMDBAPI_URL}/movie/${id}?api_key=${process.env.REACT_APP_TMDBAPI_KEY}`);
}

export const getMediaBoxImagesById = async (id: number, type: 'tv' | 'movie`') => {
	return await axios.get(`${process.env.REACT_APP_TMDBAPI_URL}/${id}/images?api_key=${process.env.REACT_APP_TMDBAPI_KEY}`);
}
