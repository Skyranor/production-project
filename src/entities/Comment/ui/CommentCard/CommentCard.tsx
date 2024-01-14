import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
  const { className, comment, isLoading } = props;
  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton border='50%' height={100} width={100} />
          <Skeleton height={20} width={100} />
        </div>
        <Skeleton width='100%' height={50} />
      </div>
    );
  }
  if (!comment) return null;
  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink className={cls.header} to={`${RoutePath.profile}/${comment.user.id}`}>
        {comment.user.avatar && <Avatar size={100} src={comment.user.avatar} />}
        <Text title={comment.user.userName} />
      </AppLink>
      <Text text={comment.text} />
    </div>
  );
};
