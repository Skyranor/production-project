import { classNames } from 'shared/lib/classNames/classNames';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import { selectProfileError } from '../../model/selectors/selectProfileError';
import { selectProfileIsLoading } from '../../model/selectors/selectProfileIsLoading';
import { selectProfile } from '../../model/selectors/selectProfile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const user = useAppSelector(selectProfile);
  const isLoading = useAppSelector(selectProfileIsLoading);
  const error = useAppSelector(selectProfileError);
  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Profile')} />
        <Button theme={ButtonTheme.OUTLINE}>{t('Edit')}</Button>
      </div>
      <div>
        <Input value={user?.first} placeholder={t('Your name')} />
        <Input value={user?.lastName} placeholder={t('Your surname')} />
      </div>
    </div>
  );
};
