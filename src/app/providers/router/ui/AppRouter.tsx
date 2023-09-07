import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <main className='page-wrapper'>
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route element={element} key={path} path={path} />
          ))}
        </Routes>
      </main>
    </Suspense>
  );
};
