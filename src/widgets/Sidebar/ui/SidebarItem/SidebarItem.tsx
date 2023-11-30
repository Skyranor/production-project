import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
  item: SidebarItemType;
}

export const SidebarItem = memo(({ item }: SidebarItemProps) => {
  const { t } = useTranslation(['main']);

  return (
    <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={item.path}>
      <item.Icon />
      <span>{t(item.text)}</span>
    </AppLink>
  );
});
