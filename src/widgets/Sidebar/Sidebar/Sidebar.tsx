import { memo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';
import { Button } from '@/shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { selectSidebarItems } from '../model/selectors/selectSidebarItems';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;

  const SidebarItemsList = useAppSelector(selectSidebarItems);

  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])} data-testid='sidebar'>
      <Button
        type='button'
        data-testid='sidebar-toggle'
        onClick={handleToggle}
        className={cls.collapseBtn}
        theme='background-inverted'
        square
        size='l'
      >
        {collapsed ? '>' : '<'}
      </Button>

      <ul className={cls.links}>
        {SidebarItemsList.map((item) => (
          <li key={item.path}>
            <SidebarItem item={item} />
          </li>
        ))}
      </ul>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
});
