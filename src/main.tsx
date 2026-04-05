import 'reset-css/reset.css';

import getI18n from '@/locale/i18n/getI18n';
import { getInitialState } from '@/store/store';

import './index.css';

const locale = async () => {
  const initialState = await getInitialState();
  getI18n(initialState.locale);
  return initialState;
};

// `root` contains the main dependencies and providers of the base app
//  - React, ReactDom, Jotai, ThemeProvider, etc.)
// App contains the main structure of the base app

// These are the two main chunks that are used to render the core structure of the app
// Importing them with Promise.all (by using HTTP/2/3 multiplexing) we can load them in parallel
// and achieve the best possible performance

Promise.all([import('@/root'), import('@/App'), locale()]).then(
  ([{ default: render }, { default: App }, initialState]) => {
    render(App, initialState);
  },
);
