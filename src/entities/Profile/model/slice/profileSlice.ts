import { createSlice } from '@reduxjs/toolkit';

import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  data: null,
  error: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const profileReducer = profileSlice.reducer;

export const { setProfile } = profileSlice.actions;
