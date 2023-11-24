import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useAuth } from 'shared/hooks/useAuth';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { logout } from 'entities/User';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const [isAuthModal, setAuthModal] = useState(false);
  const isAuth = useAuth();
  const dispatch = useAppDispatch();

  const handleOpenModal = useCallback(() => {
    setAuthModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setAuthModal(false);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(logout());
    // setAuthModal(false);
  }, [dispatch]);

  const { t } = useTranslation(['main', 'about']);

  return isAuth ? (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={handleLogout}>
        {t('Logout')}
      </Button>
    </nav>
  ) : (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={handleOpenModal}>
        {t('Login')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
      )}
    </nav>
  );
};
