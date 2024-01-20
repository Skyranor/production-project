import { Link, LinkProps } from 'react-router-dom';
import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

type AppLinkTheme = 'primary' | 'secondary' | 'outline';

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
  const { className, children, theme = 'primary', ...rest } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...rest}>
      {children}
    </Link>
  );
});
