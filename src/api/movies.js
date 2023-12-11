import makeRequest from '../utils/request';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const MOVIE_API_BASE = process.env.NEXT_PUBLIC_MOVIE_API_DOMAIN;

export const TOP_RATED_MOVIES_API = `${MOVIE_API_BASE}/top_rated?api_key=${API_KEY}&page=`;
export const POPULAR_MOVIES_API = `${MOVIE_API_BASE}/popular?api_key=${API_KEY}&page=`;
export const GET_MOVIE_API = `${MOVIE_API_BASE}/id?api_key=${API_KEY}`;
export const GET_CREDIT_API = `${MOVIE_API_BASE}/id/credits?api_key=${API_KEY}`;
export const GET_SIMILAR_MOVIES_API = `${MOVIE_API_BASE}/id/similar?api_key=${API_KEY}&page=`;
export const GET_REVIEWS_API = `${MOVIE_API_BASE}/id/reviews?api_key=${API_KEY}&page=`;

const movieAPIs = {
  getLatestMovies({ page = 1 }) {
    const url = `${MOVIE_API_BASE}/upcoming`;
    return makeRequest(url, undefined, { api_key: API_KEY, page });
  },
};

export default movieAPIs;
