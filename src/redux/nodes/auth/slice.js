import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

export const sliceName = 'auth';

const authSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setIsLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
  },
});

const getStateValue = (key) => (state) => state?.auth[key];

export const isLoggedInSelector = getStateValue('isLoggedIn');

export const { setIsLoggedIn } = authSlice.actions;
export default authSlice.reducer;
