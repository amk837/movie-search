import { createAsyncThunk } from '@reduxjs/toolkit';

export const sliceName = 'moviesEntity';

const ACTION = {
  GET_MOVIE_DETAILS: `${sliceName}/GET_MOVIE_DETAILS`,
};

export const getMovieDetails = createAsyncThunk(ACTION.GET_LATEST_MOVIES, async (data, { rejectWithValue }) => {
  try {
    const response = {};

    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});
