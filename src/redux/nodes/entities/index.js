import { combineReducers } from '@reduxjs/toolkit';
import moviesEntityReducer from './movies/slice';

const entitiesReducer = combineReducers({
  movies: moviesEntityReducer,
});

export default entitiesReducer;
