import React from 'react';
import { render } from 'react-dom';
import 'reset-css/reset.css';

import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const rootElement = document.getElementById('root');
render(<Root />, rootElement);
registerServiceWorker();
