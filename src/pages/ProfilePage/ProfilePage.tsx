import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import {
  ProfileCard,
  ValidateProfileError,
  fetchProfileData,
  profileReducer,
  selectProfileError,
  selectProfileForm,
  selectProfileIsLoading,
  selectProfileReadOnly,
  selectProfileValidateErrors,
  updateProfile,
} from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Currency } from '@/entities/Currency';
import { Text } from '@/shared/ui/Text/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Page } from '@/shared/ui/Page/Page';
// import cls from  './ProfilePage.module.scss';

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const formData = useAppSelector(selectProfileForm);
  const isLoading = useAppSelector(selectProfileIsLoading);
  const error = useAppSelector(selectProfileError);
  const readOnly = useAppSelector(selectProfileReadOnly);
  const validateErrors = useAppSelector(selectProfileValidateErrors);
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
  };

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      if (id) {
        dispatch(fetchProfileData(id));
      }
    }
  }, [dispatch, id]);

  const onChangeFirstName = useCallback(
    (value: string) => {
      dispatch(
        updateProfile({
          firstName: value,
        })
      );
    },
    [dispatch]
  );

  const onChangeLastName = useCallback(
    (value: string) => {
      dispatch(
        updateProfile({
          lastName: value,
        })
      );
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value: string) => {
      dispatch(
        updateProfile({
          age: Number(value),
        })
      );
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value: string) => {
      dispatch(
        updateProfile({
          city: value,
        })
      );
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(updateProfile({ avatar: value }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (value: Currency) => {
      dispatch(updateProfile({ currency: value }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.map((error) => <Text theme='error' text={validateErrorTranslates[error]} key={error} />)}
        <ProfileCard
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          data={formData}
          isLoading={isLoading}
          error={error}
          readOnly={readOnly}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
