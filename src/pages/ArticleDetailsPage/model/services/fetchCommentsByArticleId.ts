import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], number, ThunkConfig<string>>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const { data } = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
