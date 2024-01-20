import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleTextBlock, ArticleView } from '../../model/types/article';
import { Text } from '@/shared/ui/Text/Text';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { useHover } from '@/shared/hooks';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface ArticleListItemProps {
  className?: string;
  view?: ArticleView;
}

export const ArticleListItemSkeleton = (props: ArticleListItemProps) => {
  const { className, view = 'LIST' } = props;

  if (view === 'LIST')
    return (
      <article className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Skeleton width={300} height={32} className={cls.title} />
        <Skeleton width={100} height={18} className={cls.types} />
        <Skeleton className={cls.date} width={100} height={18} />
        <div className={cls.user}>
          <Skeleton width={50} height={50} border='50%' />
          <Skeleton width={200} height={18} />
        </div>

        <Skeleton width='100%' height={160} className={cls.img} />
        <Skeleton width='100%' height={200} className={cls.text} />
        <div className={cls.views}>
          <Skeleton width={100} height={30} />
          <Skeleton width={100} height={30} />
        </div>
        <Skeleton width={100} height={30} className={cls.btn} />
      </article>
    );

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <article className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Skeleton width={300} height={32} className={cls.title} />
      <Skeleton width={100} height={18} className={cls.types} />
      <Skeleton className={cls.date} width={100} height={18} />
      <div className={cls.user}>
        <Skeleton width={50} height={50} border='50%' />
        <Skeleton width={200} height={18} />
      </div>

      {/* <Skeleton width='100%' height={160} className={cls.img} />
      <Skeleton width='100%' height={200} className={cls.text} />
      <div className={cls.views}>
        <Skeleton width={100} height={30} />
        <Skeleton width={100} height={30} />
      </div>
      <Skeleton width={100} height={30} className={cls.btn} /> */}
    </article>
  );
};
