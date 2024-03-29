import { ChangeEvent, memo, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}
interface SelectProps {
  className?: string;
  value?: string;
  options?: SelectOption[];
  onChange?: (value: string) => void;
  label?: string;
  readOnly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const { className, onChange, options, value, label, readOnly } = props;

  const optionsList = useMemo(
    () =>
      options?.map((el) => (
        <option className={cls.option} key={el.value} value={el.value}>
          {el.content}
        </option>
      )),
    [options]
  );

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {label && <span className={cls.label}>{`${label}> `}</span>}
      <select disabled={readOnly} className={cls.select} value={value} onChange={onChangeHandler}>
        {optionsList}
      </select>
    </div>
  );
});
