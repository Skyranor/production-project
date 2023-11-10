import { StrictMode, Suspense } from 'react';
import { render } from 'react-dom';
import './app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

import { App } from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';

import './shared/config/i18n/i18n';

render(
  <StoreProvider>
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
    </BrowserRouter>
    ,
  </StoreProvider>,
  document.getElementById('root')
);
