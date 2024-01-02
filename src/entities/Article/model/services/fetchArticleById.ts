import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../types/article';

export const fetchArticleById = createAsyncThunk<Article, number, ThunkConfig<string>>(
  'articleDetails/fetchById',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const { data } = await extra.api.get<Article>(`/articles/${articleId}`);
      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
