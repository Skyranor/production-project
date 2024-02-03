import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { selectArticlesPageLimit } from '../selectors/articlesPageSelectors';

interface ArticleListParams {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], ArticleListParams, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (params, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const { page = 1 } = params;

    const limit = selectArticlesPageLimit(getState());

    try {
      const { data } = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
        },
      });

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
