import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

import { Modes, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readOnly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const { className, value, onChange, autoFocus, type = 'text', placeholder, readOnly, ...rest } = props;

  const modes: Modes = {
    [cls.readOnly]: readOnly,
  };

  const [isFocused, setFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement | null>(null);
  const isCaretVisible = isFocused && !readOnly;

  useEffect(() => {
    if (autoFocus) {
      setFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const onBlur = () => {
    setFocused(false);
  };

  const onFocus = () => {
    setFocused(true);
  };

  const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setCaretPosition(e.target.selectionStart ?? 0);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  return (
    <div className={classNames(cls.inputContainer, modes, [className])}>
      {placeholder && <span className={cls.placeholder}>{`${placeholder}>`}</span>}
      <div className={cls.inputWrapper}>
        <input
          ref={ref}
          className={cls.input}
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          type={type}
          readOnly={readOnly}
          // eslint-disable-next-line
          {...rest}
        />
        {isCaretVisible && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />}
      </div>
    </div>
  );
});
