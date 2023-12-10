import { useCallback, useEffect } from 'react';
import {
  ProfileCard,
  fetchProfileData,
  profileReducer,
  selectProfile,
  selectProfileError,
  selectProfileForm,
  selectProfileIsLoading,
  selectProfileReadOnly,
  updateProfile,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Currency } from 'entities/Currency';

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
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

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstName = useCallback(
    (value: string) => {
      dispatch(
        updateProfile({
          first: value,
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
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
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
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
