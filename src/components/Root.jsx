import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Layout from 'common/Layout';

import Game from './Game';
import Landing from './Landing';
import Round from './Round';
import { TopLanding, TopGame, TopRound } from './Top';
import ThemeProvider from './theme/Provider';
import LocaleProvider from './locale/Provider';
import TeamFormCreate from './game/team/form/Create';
import GameProvider from './game/Provider';

const Fragoute = ({ children }) => <>{children}</>;

const Root = ({
  locale, i18n, theme, games,
}) => (
  <LocaleProvider initial={locale} i18n={i18n}>
    <ThemeProvider initial={theme}>
      <Layout>
        <GameProvider initial={games}>
          <Router
            basepath={process.env.PUBLIC_URL}
            primary={false}
            component={Fragment}
          >
            <TopLanding path="/" />
            <Fragoute path="games/:gameKey">
              <TopGame path="/" />
              <TopRound path="rounds/:round" />
              <TeamFormCreate path="team" />
            </Fragoute>
          </Router>
          <Router
            basepath={process.env.PUBLIC_URL}
            primary={false}
            component={Fragoute}
          >
            <Landing path="/" component="main" />
            <Game path="games/:gameKey" />
            <Round path="games/:gameKey/rounds/:round" />
          </Router>
        </GameProvider>
      </Layout>
    </ThemeProvider>
  </LocaleProvider>
);

export default Root;
