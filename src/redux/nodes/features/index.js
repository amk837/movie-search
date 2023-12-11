import { combineReducers } from '@reduxjs/toolkit';
import latestMoviesReducer from './latest-movies/slice';

const featuresReducer = combineReducers({
  latestMovies: latestMoviesReducer,
});

export default featuresReducer;
