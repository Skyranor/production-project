import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList = (props: ArticleListProps) => {
  const { className, articles, isLoading = false, view = 'LIST' } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <ArticleListItemSkeleton view={view} />
        <ArticleListItemSkeleton view={view} />
        <ArticleListItemSkeleton view={view} />
      </div>
    );
  }

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} view={view} className={cls.ArticleListItem} key={article.id} />
  );

  if (view === 'LIST') {
    return <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>{articles.map(renderArticle)}</div>;
  }

  return <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>{articles.map(renderArticle)}</div>;
};
