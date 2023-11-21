import React from 'react';
import { render } from 'react-dom';
import i18n from 'i18next';
import 'reset-css/reset.css';

import Root from './components/Root';
import getI18n from './i18n';
import { getInitialState } from './utils/store';
import * as serviceWorker from './serviceWorkerRegistration';
import './index.css';

const rootElement = document.getElementById('root');

const start = async (props) => {
  const initialState = await getInitialState();
  await getI18n(initialState.locale);
  render(<Root {...initialState} {...props} i18n={i18n} />, rootElement);
};

start();
serviceWorker.register({
  async onUpdate(registration) {
    start({
      onUpdate: async () => {
        const [cacheKey] = await caches.keys();
        if (cacheKey) {
          const cache = await caches.open(cacheKey);
          const requests = await cache.keys();
          await Promise.all((requests || []).map((request) => cache.delete(request)));
        }
        await registration.unregister();
        setTimeout(() => window.location.reload(), 350);
      },
    });
  },
});
