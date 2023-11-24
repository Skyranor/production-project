import { lazy } from 'react';

export const LoginFormAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // eslint-disable-next-line
        // @ts-ignore
        resolve(import('./LoginForm'));
      }, 1500);
    })
);
