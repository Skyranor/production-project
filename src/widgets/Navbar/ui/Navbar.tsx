import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation(['main', 'about']);
  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <ul className={cls.links}>
        <li>
          <AppLink theme={AppLinkTheme.SECONDARY} to='/'>
            {t('Главная страница')}
          </AppLink>
        </li>
        <li>
          <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
            {t('О сайте')}
          </AppLink>
        </li>
      </ul>
    </nav>
  );
};
