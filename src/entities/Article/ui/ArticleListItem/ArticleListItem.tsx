import { useTranslation } from 'react-i18next';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleTextBlock, ArticleView } from '../../model/types/article';
import { Text } from '@/shared/ui/Text/Text';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button } from '@/shared/ui/Button/Button';
import { useHover } from '@/shared/hooks';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
  const { className, article, view } = props;
  const { t } = useTranslation('articles');
  const { pathname } = useLocation();

  const [isHover, bindHover] = useHover();

  const textBlock = article.blocks.find((block): block is ArticleTextBlock => block.type === 'TEXT');

  if (view === 'LIST')
    return (
      <article {...bindHover} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Text title={article.title} className={cls.title} />
        <Text text={article.type.join(', ')} className={cls.types} />
        <span className={cls.date}>{article.createdAt}</span>
        <div className={cls.user}>
          <Avatar size={50} src={article.user.avatar} />
          <Text text={article.user.userName} />
        </div>

        <img src={article.img} alt={article.title} className={cls.img} />
        {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.text} />}
        <div className={cls.views}>
          <span>{article.views}</span>
          <Icon Svg={EyeIcon} />
        </div>

        <AppLink
          theme='outline'
          state={{ from: pathname }}
          className={cls.btn}
          to={`${RoutePath.article_details}/${article.id}`}
        >
          {t('View more')}
        </AppLink>
      </article>
    );
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link
      {...bindHover}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      to={`${RoutePath.article_details}/${article.id}`}
      state={{ from: pathname }}
    >
      <Text title={article.title} className={cls.title} />
      <Text text={article.type.join(', ')} className={cls.types} />
      <span className={cls.date}>{article.createdAt}</span>
      <img src={article.img} alt={article.title} className={cls.img} />
      <div className={cls.views}>
        <span>{article.views}</span>
        <Icon Svg={EyeIcon} />
      </div>
      <span className={cls.date}>{article.createdAt}</span>
    </Link>
  );
};
