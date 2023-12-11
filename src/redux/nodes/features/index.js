import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './movies/slice';

const featuresReducer = combineReducers({
  movies: moviesReducer,
});

export default featuresReducer;
