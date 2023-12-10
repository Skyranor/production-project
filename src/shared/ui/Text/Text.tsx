import { Modes, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export type TextAlign = 'left' | 'right' | 'center';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
  const { className, text, title, theme = TextTheme.PRIMARY, align = 'left' } = props;

  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
