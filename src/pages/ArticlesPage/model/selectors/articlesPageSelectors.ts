import { StateSchema } from '@/app/providers/StoreProvider';

export const selectArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;

export const selectArticlesPageError = (state: StateSchema) => state.articlesPage?.error;

export const selectArticlesPageView = (state: StateSchema) => state.articlesPage?.view || 'LIST';

export const selectArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const selectArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const selectArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;
