import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainImg from 'shared/assets/icons/main-20-20.svg';
import AboutImg from 'shared/assets/icons/about-20-20.svg';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const { t } = useTranslation(['main']);

  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
      data-testid='sidebar'
    >
      <Button
        type='button'
        data-testid='sidebar-toggle'
        onClick={handleToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {/* {t('Toggle')} */}
        {collapsed ? '>' : '<'}
      </Button>
      <ul className={cls.links}>
        <li>
          <AppLink
            className={cls.link}
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.main}
          >
            <MainImg />
            <span>{t('Главная страница')}</span>
          </AppLink>
        </li>
        <li>
          <AppLink
            className={cls.link}
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.about}
          >
            <AboutImg />
            <span>{t('О сайте')}</span>
          </AppLink>
        </li>
      </ul>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
