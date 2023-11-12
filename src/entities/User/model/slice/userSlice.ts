import { createSlice } from '@reduxjs/toolkit';

import { UserSchema } from '../types/user';

const initialState: UserSchema = {};

const userSlice = createSlice({
  name: 'user',
  reducers: {},
  initialState,
});

export const userReducer = userSlice.reducer;
