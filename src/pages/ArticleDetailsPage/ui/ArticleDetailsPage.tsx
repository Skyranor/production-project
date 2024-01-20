import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { CommentList } from '@/entities/Comment';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, selectArticleComments } from '../model/slices/articleDetailsCommentsSlice';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { selectArticleCommentsError, selectArticleCommentsIsLoading } from '../model/selectors/comments';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { AddNewComment } from '@/features/addNewComment';
import { addCommentForArticle } from '../model/services/addCommentForArticle';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface ArticleDetailsPageProps {
  className?: string;
}
const reducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};
const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const comments = useAppSelector(selectArticleComments.selectAll);
  const isLoading = useAppSelector(selectArticleCommentsIsLoading);
  const error = useAppSelector(selectArticleCommentsError);

  const { state } = useLocation();
  const location = useLocation();
  console.log(location);

  const handleSendComment = (text: string) => {
    dispatch(addCommentForArticle(text));
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchCommentsByArticleId(Number(id)));
    }
  }, [dispatch, id]);

  if (!id) {
    return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t('Article not found')}</div>;
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <AppLink theme='outline' to={state?.from ?? RoutePath.main}>
          {t('Back')}
        </AppLink>
        <ArticleDetails id={Number(id)} className={cls.article} />
        <AddNewComment onSendComment={handleSendComment} />
        <Text title={t('Comments')} className={cls.title} />
        <CommentList comments={comments} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
