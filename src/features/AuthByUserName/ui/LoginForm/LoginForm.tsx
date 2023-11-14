import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';

import { loginByUserName } from '../../services/loginByUserName/loginByUserName';
import { setPassword, setUserName } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { selectLoginState } from '../../model/selectors/selectLoginState';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useAppDispatch();
  const { password, username, isLoading, error } =
    useAppSelector(selectLoginState);

  const handleChangeUserName = (value: string) => {
    dispatch(setUserName(value));
  };

  const handleChangePassword = (value: string) => {
    dispatch(setPassword(value));
  };

  const handleLogin = () => {
    dispatch(loginByUserName({ password, username }));
  };

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={error.toString()} theme={TextTheme.ERROR} />}
      <Input
        value={username}
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
  );
});
