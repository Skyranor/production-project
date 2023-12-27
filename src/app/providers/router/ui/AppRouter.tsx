import { useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';

import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const { element } = route;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);
  return (
    <main className='page-wrapper'>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </main>
  );
};
