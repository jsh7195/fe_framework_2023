// import 'babel-polyfill';
// import 'core-js';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { HistoryRouter } from '@lib/router/HistoryRouter';
import { myHistory } from '@lib/router/history';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      cacheTime: 1000 * 10,
      refetchOnWindowFocus: false,
      enabled: false,
      retry: false,
      useErrorBoundary: true,
      suspense: true
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HistoryRouter history={myHistory}>
      <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
        <App />
      </QueryClientProvider>
    </HistoryRouter>
  </React.StrictMode>
);

reportWebVitals();
