import { ReactNode, useRef } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { useInfiniteScroll } from '@/shared/hooks';

interface PageProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const triggerRef = useRef(null);
  const contentRef = useRef(null);

  useInfiniteScroll({
    contentRef,
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <main ref={contentRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </main>
  );
};
