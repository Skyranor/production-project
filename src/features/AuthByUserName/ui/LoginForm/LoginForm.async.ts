import { FC, lazy } from 'react';

import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // eslint-disable-next-line
        // @ts-ignore
        resolve(import('./LoginForm'));
      }, 1500);
    })
);
