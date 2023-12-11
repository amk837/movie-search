import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './nodes/auth/slice';
import featuresReducer from './nodes/features';
import entitiesReducer from './nodes/entities';

const reducer = combineReducers({
  features: featuresReducer,
  auth: authReducer,
  application: {},
  entities: entitiesReducer,
});

const store = configureStore({
  reducer,
});

export default store;
