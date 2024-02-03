import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList';

jest.mock('../fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
  it('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        hasMore: true,
        page: 2,
        ids: [],
        entities: {},
        isLoading: false,
        limit: 5,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  });

  it('fetchArticlesList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        hasMore: false,
        page: 2,
        ids: [],
        entities: {},
        isLoading: false,
        limit: 5,
      },
    });

    await thunk.callThunk();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
