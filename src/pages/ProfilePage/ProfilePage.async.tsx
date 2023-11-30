import { lazy } from 'react';

export const ProfilePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // eslint-disable-next-line
      // @ts-ignore
      setTimeout(() => resolve(import('./ProfilePage')), 1500);
    })
);
