import { useTranslation } from 'react-i18next';

import { Modes, classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  onChangeFirstName: (value: string) => void;
  onChangeLastName: (value: string) => void;
  onChangeAge: (value: string) => void;
  onChangeCity: (value: string) => void;
  onChangeAvatar: (value: string) => void;
  onChangeCurrency: (currency: Currency) => void;
  readOnly?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeCurrency,
    readOnly,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme='error'
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align='center'
        />
      </div>
    );
  }

  const modes: Modes = {
    [cls.editing]: !readOnly,
  };

  return (
    <div className={classNames(cls.ProfileCard, modes, [className])}>
      {data?.avatar && <Avatar src={data.avatar} className={cls.avatar} size={150} />}
      <Input value={data?.firstName} onChange={onChangeFirstName} placeholder={t('Your name')} readOnly={readOnly} />
      <Input value={data?.lastName} onChange={onChangeLastName} placeholder={t('Your surname')} readOnly={readOnly} />
      <Input value={data?.age} onChange={onChangeAge} placeholder={t('Age')} readOnly={readOnly} />
      <Input value={data?.city} onChange={onChangeCity} placeholder={t('City')} readOnly={readOnly} />
      <Input value={data?.avatar} onChange={onChangeAvatar} placeholder={t('Avatar')} readOnly={readOnly} />
      <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readOnly={readOnly} />
    </div>
  );
};
