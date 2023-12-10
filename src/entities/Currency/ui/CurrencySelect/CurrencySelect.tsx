import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/types/currency';
// import cls from './CurrencySelect.module.scss';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = (props: CurrencySelectProps) => {
  const { className, onChange, value, readOnly } = props;
  const { t } = useTranslation('profile');
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onChangeHandler = (value: string) => {
    onChange?.(value as Currency);
  };
  return (
    <Select
      label={t('Currency')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readOnly={readOnly}
      // className={classNames(cls.CurrencySelect, {}, [className])}
    />
  );
};
