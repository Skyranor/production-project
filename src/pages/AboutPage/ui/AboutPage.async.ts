import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // eslint-disable-next-line
      // @ts-ignore
      setTimeout(() => resolve(import('./AboutPage')), 1500);
    })
);
