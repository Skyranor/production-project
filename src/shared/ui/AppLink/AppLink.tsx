import { Link, LinkProps } from 'react-router-dom';
import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
  const { className, children, theme = AppLinkTheme.PRIMARY, ...rest } = props;
  return (
    <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...rest}>
      {children}
    </Link>
  );
});
