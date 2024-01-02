import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const LoginModal = (props: LoginModalProps) => {
  const { isOpen, onClose, className } = props;

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])}>
      <LoginFormAsync onSuccess={onClose} />
    </Modal>
  );
};
