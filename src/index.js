import React from 'react';
import { render } from 'react-dom';

import Root from './components/Root';
import 'reset-css/reset.css';
import './index.css';

const rootElement = document.getElementById('root');
render(<Root />, rootElement);
