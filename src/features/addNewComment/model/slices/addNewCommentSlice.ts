import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AddNewCommentSchema } from '../types/addNewComment';

const initialState: AddNewCommentSchema = {
  text: '',
  error: undefined,
};

const addNewCommentSlice = createSlice({
  name: 'addNewComment',
  initialState,
  reducers: {
    setCommentText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});

export const addNewCommentReducer = addNewCommentSlice.reducer;
export const { setCommentText } = addNewCommentSlice.actions;
