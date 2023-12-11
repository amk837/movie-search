import { createAsyncThunk } from '@reduxjs/toolkit';
import movieAPIs from '../../../../api/movies';
import { addMovie } from '../../entities/movies/slice';

export const sliceName = 'latestMovies';

const ACTION = {
  GET_LATEST_MOVIES: `${sliceName}/GET_LATEST_MOVIES`,
  GET_POPULAR_MOVIES: `${sliceName}/GET_POPULAR_MOVIES`,
  GET_TOP_MOVIES: `${sliceName}/GET_TOP_MOVIES`,
};

const service = (api, action) => createAsyncThunk(action, async ({ page }, { rejectWithValue, dispatch }) => {
  try {
    const response = await api({ page });
    const results = response.results.map((movie) => {
      dispatch(addMovie(movie));
      return movie.id;
    });
    return { ...response, results };
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getLatestMovies = service(movieAPIs.getLatestMovies, ACTION.GET_LATEST_MOVIES);

export const getPopularMovies = service(movieAPIs.getPopularMovies, ACTION.GET_POPULAR_MOVIES);

export const getTopMovies = service(movieAPIs.getTopMovies, ACTION.GET_TOP_MOVIES);
