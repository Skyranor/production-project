import { useEffect } from 'react';

import { Navbar } from '@/widgets/Navbar';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { initAuthData, selectUserMounted } from '@/entities/User';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { AppRouter } from './providers/router';
import { Sidebar } from '@/widgets/Sidebar';

export const App = () => {
  const dispatch = useAppDispatch();
  const isMountedUser = useAppSelector(selectUserMounted);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        {isMountedUser && <AppRouter />}
      </div>
    </div>
  );
};
