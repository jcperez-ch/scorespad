import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from 'common/Layout';

import Game from './Game';
import Landing from './Landing';
import Round from './Round';
import Storage from './Storage';
import ThemeProvider from './theme/Provider';
import LocaleProvider from './locale/Provider';
import GameProvider from './game/Provider';

const Root = ({ locale, theme, games }) => (
  <LocaleProvider initial={locale}>
    <ThemeProvider initial={theme}>
      <Layout>
        <Router basename={process.env.PUBLIC_URL}>
          <GameProvider initial={games}>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/games/:gameKey" component={Game} />
              <Route
                exact
                path="/games/:gameKey/rounds/:round"
                component={Round}
              />
              <Route exact path="/storage" component={Storage} />
            </Switch>
          </GameProvider>
        </Router>
      </Layout>
    </ThemeProvider>
  </LocaleProvider>
);

export default Root;
