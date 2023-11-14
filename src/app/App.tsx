import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { initAuthData } from 'entities/User';

import { AppRouter } from './providers/router';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
