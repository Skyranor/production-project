import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement | null>;
  contentRef: MutableRefObject<HTMLElement | null>;
}

export const useInfiniteScroll = ({ callback, triggerRef, contentRef }: UseInfiniteScrollOptions) => {
  useEffect(() => {
    const triggerElement = triggerRef.current;
    let observer: IntersectionObserver | null = null;

    if (callback) {
      const options = {
        root: contentRef.current,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          callback();
        }
      }, options);

      if (triggerElement) {
        observer.observe(triggerElement);
      }
    }

    return () => {
      if (triggerElement && observer) {
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, contentRef, triggerRef]);
};
