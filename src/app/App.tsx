import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
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