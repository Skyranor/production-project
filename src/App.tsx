import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useTheme } from './theme/useTheme';
import { MainPage } from './components/MainPage/MainPage';
import { AboutPageAsync } from './components/AboutPage/AboutPage.async';

export function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button type='button' onClick={toggleTheme}>
        click
      </button>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}
