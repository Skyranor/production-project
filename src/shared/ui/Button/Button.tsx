import { ButtonHTMLAttributes, memo } from 'react';

import { Modes, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

// eslint-disable-next-line react-refresh/only-export-components
type ButtonTheme = 'clear' | 'outline' | 'outline-red' | 'background' | 'background-inverted';

type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, theme = 'outline', square, size = 'm', disabled, ...rest } = props;
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
