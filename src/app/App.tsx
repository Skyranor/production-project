import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

import { AppRouter } from './providers/router';

export const App = () => (
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
