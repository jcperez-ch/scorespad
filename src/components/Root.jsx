import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from 'common/Layout';

import Landing from './Landing';
import Game from './Game';
import ThemeProvider from './theme/Provider';
import LocaleProvider from './locale/Provider';
import GameProvider from './game/Provider';

const Root = () => (
  <LocaleProvider>
    <ThemeProvider>
      <Layout>
        <Router>
          <GameProvider>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/games/:gameKey" component={Game} />
            </Switch>
          </GameProvider>
        </Router>
      </Layout>
    </ThemeProvider>
  </LocaleProvider>
);

export default Root;
