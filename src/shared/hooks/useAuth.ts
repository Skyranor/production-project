import { useAppSelector } from './useAppSelector';

export const useAuth = (): boolean => {
  const authData = useAppSelector((state) => state.user.authData);
  const isAuth = Boolean(authData);
  return isAuth;
};
