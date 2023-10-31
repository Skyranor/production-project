import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
  className?: string;
}

// компонент для тестирования ошибок

export const BugButton = ({ className }: BugButtonProps) => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return <Button onClick={onThrow}>{t('Сделать ошибку')}</Button>;
};
