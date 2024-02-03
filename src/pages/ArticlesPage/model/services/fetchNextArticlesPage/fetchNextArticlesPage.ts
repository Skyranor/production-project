import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
  selectArticlesPageHasMore,
  selectArticlesPageIsLoading,
  selectArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList';
import { articlesPageActions } from '../../slices/articlePageSlice';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const hasMore = selectArticlesPageHasMore(getState());
    const page = selectArticlesPageNum(getState());
    const isLoading = selectArticlesPageIsLoading(getState());

    if (!isLoading && hasMore) {
      dispatch(articlesPageActions.incrementPage());
      dispatch(fetchArticlesList({ page: page + 1 }));
    }
  }
);
