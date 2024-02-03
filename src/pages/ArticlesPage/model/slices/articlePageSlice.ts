import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { Article, ArticleView } from '@/entities/Article';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList';
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    view: 'LIST',
    entities: {},
    ids: [],
    page: 1,
    hasMore: true,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload);
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === 'LIST' ? 4 : 9;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesList.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
      state.isLoading = false;
      state.error = undefined;
      articlesAdapter.addMany(state, action.payload);
      state.hasMore = action.payload.length > 0;
    });
    builder.addCase(fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { setView } = articlesPageSlice.actions;
export const articlesPageActions = articlesPageSlice.actions;
export const articlesPageReducer = articlesPageSlice.reducer;
