import { memo, useEffect } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { ArticleList, ArticleView, ArticleViewSelector } from '@/entities/Article';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles, setView } from '../model/slices/articlePageSlice';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { fetchArticlesList } from '../model/services/fetchArticlesList';
import { selectArticlesPageIsLoading, selectArticlesPageView } from '../model/selectors/articlesPageSelectors';
import { Page } from '@/shared/ui/Page/Page';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useAppSelector(getArticles.selectAll);
  const isLoading = useAppSelector(selectArticlesPageIsLoading);
  const view = useAppSelector(selectArticlesPageView);

  const handleChangeView = (newView: ArticleView) => {
    dispatch(setView(newView));
  };

  const handleLoadMore = () => {
    dispatch(fetchNextArticlesPage());
  };

  useEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  }, [dispatch]);
  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={handleLoadMore} className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={handleChangeView} />
        <ArticleList articles={articles} isLoading={isLoading} view={view} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
