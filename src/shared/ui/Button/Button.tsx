import { ButtonHTMLAttributes, memo } from 'react';
import { Modes, classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

// eslint-disable-next-line react-refresh/only-export-components
export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, theme = ButtonTheme.OUTLINE, square, size = ButtonSize.M, disabled, ...rest } = props;
  const mods: Modes = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type='button' className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])} {...rest}>
      {children}
    </button>
  );
});
