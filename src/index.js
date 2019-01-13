import React from 'react';
import { render } from 'react-dom';
import 'reset-css/reset.css';

import Root from './components/Root';
import { getInitialState } from './utils/store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const rootElement = document.getElementById('root');

const start = async () => {
  const initialState = await getInitialState();
  render(<Root {...initialState} />, rootElement);
  registerServiceWorker();
};

start();
