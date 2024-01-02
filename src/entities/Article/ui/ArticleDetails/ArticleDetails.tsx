import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { Text } from '@/shared/ui/Text/Text';
import { selectArticleDetails, selectArticleDetailsError, selectArticleDetailsIsLoading } from '../../model/selectors';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
  className?: string;
  id?: number;
}
const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectArticleDetailsIsLoading);
  const article = useAppSelector(selectArticleDetails);
  const error = useAppSelector(selectArticleDetailsError);

  useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content = null;

  if (error) {
    content = <Text theme='error' title={t('Article not found')} />;
  }
  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border='50%' />
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width='100%' height={200} />
        <Skeleton width='100%' height={200} />
      </>
    );
  }
  if (article) {
    const renderBlock = (block: ArticleBlock) => {
      switch (block.type) {
        case 'CODE':
          return <ArticleCodeBlockComponent key={block.id} block={block} />;
        case 'IMAGE':
          return <ArticleImageBlockComponent key={block.id} block={block} />;
        case 'TEXT':
          return <ArticleTextBlockComponent key={block.id} block={block} />;

        default:
          return null;
      }
    };
    content = (
      <>
        <Avatar src={article.img} size={200} className={cls.avatar} />
        <Text title={article.title} text={article.subtitle} size='l' />
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon} />
          <Text text={String(article.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  );
});
