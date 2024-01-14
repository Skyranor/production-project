import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { selectUser } from '@/entities/User';
import { selectArticleDetails } from '@/entities/Article';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI;

    const user = selectUser(getState());
    const article = selectArticleDetails(getState());

    if (!user || !text || !article) {
      return rejectWithValue('no data');
    }

    try {
      const { data } = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        text,
        userId: user.id,
      });

      if (!data) {
        return rejectWithValue('no data');
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
