import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button } from '../Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} theme='clear' className={classNames('', {}, [className])}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
