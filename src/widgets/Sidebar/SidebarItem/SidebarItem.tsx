import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { useAuth } from '@/shared/hooks/useAuth';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../model/types/sidebar';

interface SidebarItemProps {
  item: SidebarItemType;
}

export const SidebarItem = memo(({ item }: SidebarItemProps) => {
  const { t } = useTranslation(['main']);
  const isAuth = useAuth();

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink className={cls.link} theme='secondary' to={item.path}>
      <item.Icon />
      <span>{t(item.text)}</span>
    </AppLink>
  );
});
