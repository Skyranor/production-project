import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<User>) {
      state.authData = action.payload;
    },
    initAuthData(state) {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout() {
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
      return initialState;
    },
  },
});

export const userReducer = userSlice.reducer;

export const { setAuthData, initAuthData, logout } = userSlice.actions;
