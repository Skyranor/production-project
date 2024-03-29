import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { LoginSchema } from '../types/loginSchema';
import { loginByUserName } from '../../services/loginByUserName/loginByUserName';

const initialState: LoginSchema = {
  userName: '',
  password: '',
  isLoading: false,
  error: undefined,
};

const loginSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUserName.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUserName.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const loginReducer = loginSlice.reducer;

export const { setPassword, setUserName } = loginSlice.actions;
