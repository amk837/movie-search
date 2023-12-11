import { createSlice } from '@reduxjs/toolkit';
import {
  getLatestMovies, getPopularMovies, getTopMovies, sliceName,
} from './service';

const moviesInitialState = {
  results: [],
  page: 1,
  perPage: 20,
  total_results: 0,
  total_pages: 0,
};

const initialState = {
  latestMovies: moviesInitialState,
  topMovies: moviesInitialState,
  popularMovies: moviesInitialState,
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLatestMovies.fulfilled, (state, { payload }) => {
      state.latestMovies = payload;
    });
    builder.addCase(getPopularMovies.fulfilled, (state, { payload }) => {
      state.popularMovies = payload;
    });
    builder.addCase(getTopMovies.fulfilled, (state, { payload }) => {
      state.topMovies = payload;
    });
  },
});

const getStateValue = (key) => (state) => state.features.movies[key];

export const latestMoviesSelector = getStateValue('latestMovies');
export const topMoviesSelector = getStateValue('topMovies');
export const popularMoviesSelector = getStateValue('popularMovies');

export const { setIsLoggedIn } = slice.actions;
export default slice.reducer;
