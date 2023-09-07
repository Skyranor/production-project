import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
  const { className, children, theme = AppLinkTheme.PRIMARY, ...rest } = props;
  return (
    <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...rest}>
      {children}
    </Link>
  );
};
