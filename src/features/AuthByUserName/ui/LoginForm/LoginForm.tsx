import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { selectLoginIsLoading } from '../../model/selectors/selectLoginIsLoading';
import { selectLoginError } from '../../model/selectors/selctLoginError';
import { selectLoginPassword } from '../../model/selectors/selectLoginPassword';
import { selectLoginUserName } from '../../model/selectors/selectLoginUserName';
import { loginByUserName } from '../../services/loginByUserName/loginByUserName';
import {
  loginReducer,
  setPassword,
  setUserName,
} from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const userName = useAppSelector(selectLoginUserName);
  const isLoading = useAppSelector(selectLoginIsLoading);
  const error = useAppSelector(selectLoginError);
  const password = useAppSelector(selectLoginPassword);

  const dispatch = useAppDispatch();

  const handleChangeUserName = (value: string) => {
    dispatch(setUserName(value));
  };

  const handleChangePassword = (value: string) => {
    dispatch(setPassword(value));
  };

  const handleLogin = () => {
    dispatch(loginByUserName({ password, userName }));
  };

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && <Text text={error.toString()} theme={TextTheme.ERROR} />}
        <Input
          value={userName}
          onChange={handleChangeUserName}
          autoFocus
          placeholder={t('Введите имя')}
        />
        <Input
          value={password}
          onChange={handleChangePassword}
          placeholder={t('Введите пароль')}
        />
        <Button
          disabled={isLoading}
          onClick={handleLogin}
          theme={ButtonTheme.OUTLINE}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
