/* @refresh reload */
import './index.css';

import { render } from 'solid-js/web';
import { MetaProvider } from '@solidjs/meta';
import { Router, hashIntegration } from '@solidjs/router';
import App from './app';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <MetaProvider>
      <Router source={hashIntegration()}>
        <App />
      </Router>
    </MetaProvider>
  ),
  root,
);
