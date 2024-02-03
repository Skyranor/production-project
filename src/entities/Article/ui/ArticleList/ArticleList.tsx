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

  const renderSkeletons = (articleView: ArticleView) =>
    new Array(view === 'GRID' ? 9 : 3)
      .fill(0)
      // eslint-disable-next-line react/no-array-index-key
      .map((_, index) => <ArticleListItemSkeleton key={index} view={articleView} />);

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} view={view} className={cls.ArticleListItem} key={article.id} />
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.map(renderArticle)}
      {isLoading && renderSkeletons(view)}
    </div>
  );
};
