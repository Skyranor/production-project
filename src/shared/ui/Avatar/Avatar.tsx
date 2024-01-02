import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
}

export const Avatar = (props: AvatarProps) => {
  const { className, size, src } = props;

  return <img className={classNames(cls.Avatar, {}, [className])} src={src} alt='Avatar' width={size} height={size} />;
};
