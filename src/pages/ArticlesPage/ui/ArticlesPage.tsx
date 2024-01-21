import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { ArticleList, ArticleView, ArticleViewSelector } from '@/entities/Article';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles, setView } from '../model/slices/articlePageSlice';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { fetchArticlesList } from '../model/services/fetchArticlesList';
import { selectArticlesPageIsLoading, selectArticlesPageView } from '../model/selectors/articlesPageSelectors';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articles = useAppSelector(getArticles.selectAll);
  const isLoading = useAppSelector(selectArticlesPageIsLoading);
  const view = useAppSelector(selectArticlesPageView);

  console.log(view);

  const handleChangeView = (newView: ArticleView) => {
    dispatch(setView(newView));
  };

  useEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  }, [dispatch]);
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={handleChangeView} />
        <ArticleList articles={articles} isLoading={isLoading} view={view} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
