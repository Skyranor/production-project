import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useAuth } from 'shared/hooks/useAuth';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RequireAuth = ({ children }: { children: any }) => {
  const isAuth = useAuth();
  const location = useLocation();

  if (isAuth) {
    return children;
  }

  return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
};
