import React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from 'components/ErrorBoundary';
import { isDev } from 'consts';

import App from './App';

import 'assets/main.scss';

const mountNode = document.getElementById('app');

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  mountNode,
);

if (isDev && module.hot) {
  module.hot.accept();
}
