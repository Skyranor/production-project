import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const [isAuthModal, setAuthModal] = useState(false);

  const toggleModal = () => {
    setAuthModal((prev) => !prev);
  };

  const { t } = useTranslation(['main', 'about']);
  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={toggleModal}>
        {t('Login')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={toggleModal} />
    </nav>
  );
};
