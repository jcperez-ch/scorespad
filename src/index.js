import React from 'react';
import { render } from 'react-dom';
import i18n from 'i18next';
import 'reset-css/reset.css';

import Root from './components/Root';
import getI18n from './i18n';
import { getInitialState } from './utils/store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const rootElement = document.getElementById('root');

const start = async () => {
  const initialState = await getInitialState();
  await getI18n(initialState.locale);
  render(<Root {...initialState} i18n={i18n} />, rootElement);
  registerServiceWorker();
};

start();
