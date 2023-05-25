import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './../src/utils/styles/app-base.css';
import './../src/utils/styles/app-components.css';
import './../src/utils/styles/app-utilities.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserTracing } from '@sentry/tracing';
import * as Sentry from '@sentry/react';
import { useNavigationType, createRoutesFromChildren, matchRoutes } from 'react-router-dom';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        React.useEffect,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes
      ),
    }),
  ],
  environment: process.env.REACT_APP_SENTRY_ENV,
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.2,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
