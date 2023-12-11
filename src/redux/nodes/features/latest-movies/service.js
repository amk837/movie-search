import { createAsyncThunk } from '@reduxjs/toolkit';
import movieAPIs from '../../../../api/movies';
import { addMovie } from '../../entities/movies/slice';

export const sliceName = 'latestMovies';

const ACTION = {
  GET_LATEST_MOVIES: `${sliceName}/GET_LATEST_MOVIES`,
};

export const getLatestMovies = createAsyncThunk(ACTION.GET_LATEST_MOVIES, async ({ page }, { rejectWithValue, dispatch }) => {
  try {
    const response = await movieAPIs.getLatestMovies({ page });
    const results = response.results.map((movie) => {
      dispatch(addMovie(movie));
      return movie.id;
    });
    return { ...response, results };
  } catch (err) {
    return rejectWithValue(err);
  }
});
