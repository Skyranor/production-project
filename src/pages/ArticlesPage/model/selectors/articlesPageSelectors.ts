import { StateSchema } from '@/app/providers/StoreProvider';

export const selectArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;

export const selectArticlesPageError = (state: StateSchema) => state.articlesPage?.error;

export const selectArticlesPageView = (state: StateSchema) => state.articlesPage?.view || 'LIST';
