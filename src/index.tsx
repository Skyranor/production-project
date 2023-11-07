import { StrictMode, Suspense } from 'react';
import { render } from 'react-dom';
import './app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

import { App } from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';

import './shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <Suspense fallback='loading...'>
      <ErrorBoundary>
        <ThemeProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </ThemeProvider>
      </ErrorBoundary>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);
