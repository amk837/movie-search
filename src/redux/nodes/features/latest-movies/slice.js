import { createSlice } from '@reduxjs/toolkit';
import { getLatestMovies, sliceName } from './service';

const initialState = {
  movies: {
    results: [],
    page: 1,
    perPage: 20,
    total_results: 0,
    total_pages: 0,
  },
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLatestMovies.fulfilled, (state, { payload }) => {
      state.movies = payload;
    });
  },
});

const getStateValue = (key) => (state) => state.features.latestMovies[key];

export const latestMoviesSelector = getStateValue('movies');

export const { setIsLoggedIn } = slice.actions;
export default slice.reducer;
