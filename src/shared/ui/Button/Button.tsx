import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes } from 'react';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
  const { className, children, theme, ...rest } = props;
  return (
    <button
      type='button'
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...rest}
    >
      {children}
    </button>
  );
};