import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Text } from '@/shared/ui/Text/Text';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { selectLoginIsLoading } from '../../model/selectors/selectLoginIsLoading/selectLoginIsLoading';
import { selectLoginError } from '../../model/selectors/selectLoginError/selectLoginError';
import { selectLoginPassword } from '../../model/selectors/selectLoginPassword/selectLoginPassword';
import { selectLoginUserName } from '../../model/selectors/selectLoginUserName/selectLoginUserName';
import { loginByUserName } from '../../services/loginByUserName/loginByUserName';
import { loginReducer, setPassword, setUserName } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const userName = useAppSelector(selectLoginUserName);
  const isLoading = useAppSelector(selectLoginIsLoading);
  const error = useAppSelector(selectLoginError);
  const password = useAppSelector(selectLoginPassword);

  const dispatch = useAppDispatch();

  const handleChangeUserName = useCallback(
    (value: string) => {
      dispatch(setUserName(value));
    },
    [dispatch]
  );

  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(setPassword(value));
    },
    [dispatch]
  );

  const handleLogin = async () => {
    const result = await dispatch(loginByUserName({ password, userName }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  };

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && <Text text={error.toString()} theme='error' />}
        <Input value={userName} onChange={handleChangeUserName} autoFocus placeholder={t('Введите имя')} />
        <Input value={password} onChange={handleChangePassword} placeholder={t('Введите пароль')} />
        <Button disabled={isLoading} onClick={handleLogin} theme='outline'>
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
