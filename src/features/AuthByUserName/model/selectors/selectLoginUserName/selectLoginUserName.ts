import { StateSchema } from 'app/providers/StoreProvider';

export const selectLoginUserName = (state: StateSchema) =>
  state?.loginForm?.userName || '';
