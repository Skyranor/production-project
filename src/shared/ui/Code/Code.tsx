import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button } from '../Button/Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';

interface CodeProps {
  className?: string;
  code: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, code } = props;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
  }, [code]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={handleCopy} className={cls.copyBtn} theme='clear'>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{code}</code>
    </pre>
  );
});
