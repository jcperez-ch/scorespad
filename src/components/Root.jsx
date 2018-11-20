import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from 'common/Layout';

import Game from './Game';
import Landing from './Landing';
import ThemeProvider from './theme/Provider';
import LocaleProvider from './locale/Provider';
import GameProvider from './game/Provider';

const Root = () => (
  <LocaleProvider>
    <ThemeProvider>
      <Layout>
        <Router basename={process.env.PUBLIC_URL}>
          <GameProvider>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/games/:gameKey" component={Game} />
            </Switch>
          </GameProvider>
        </Router>
      </Layout>
    </ThemeProvider>
  </LocaleProvider>
);

export default Root;
