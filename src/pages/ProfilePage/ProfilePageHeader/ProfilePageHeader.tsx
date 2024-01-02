import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text/Text';
import { cancelEdit, selectProfileReadOnly, setReadonly, updateProfileData } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const readOnly = useAppSelector(selectProfileReadOnly);

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Profile')} />
      {readOnly ? (
        <Button theme='outline' onClick={onEdit}>
          {t('Edit')}
        </Button>
      ) : (
        <div className={cls.btns}>
          <Button theme='outline-red' onClick={onCancelEdit}>
            {t('Cancel')}
          </Button>
          <Button theme='outline' onClick={onSave}>
            {t('Save')}
          </Button>
        </div>
      )}
    </div>
  );
};
