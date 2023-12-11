import { createSlice } from '@reduxjs/toolkit';
import { sliceName } from './service';

const initialState = {
  movies: {},
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.movies[payload.id] = { ...payload };
    },
    removeMovie: (state, { payload }) => {
      if (payload.id in state.movies) delete state.movies[payload.id];
    },
    updateMovie: (state, { payload }) => {
      state.movies[payload.id] = { ...(state.movies[payload?.id] || {}), ...payload };
    },
  },
});

const getStateValue = (key) => (state) => state.entities.movies[key];

export const getMovieDataSelector = getStateValue('movies') || undefined;

export const { addMovie, removeMovie, updateMovie } = slice.actions;

export default slice.reducer;
