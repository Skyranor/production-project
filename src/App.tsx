import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { useTranslation } from 'react-i18next';

import { useTheme } from './theme/useTheme';

export function App() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  return (
    <div className={`app ${theme}`}>
      <button type='button' onClick={toggleTheme}>
        {t('Toggle')}
      </button>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
