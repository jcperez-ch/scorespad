import React, { lazy, Fragment, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'

import Layout from 'common/Layout'

import Landing from './Landing'
import { TopLanding, TopGame, TopRound } from './Top'
import ThemeProvider from './theme/Provider'
import LocaleProvider from './locale/Provider'
import GameProvider from './game/Provider'

const Game = lazy(() => import(/* webpackChunkName: "game" *//* webpackMode: "lazy" */'./Game'))
const Round = lazy(() => import(/* webpackChunkName: "round" *//* webpackMode: "lazy" */'./Round'))

const TeamFormCreate = lazy(() => import(/* webpackChunkName: "create" *//* webpackMode: "lazy" */'./game/team/form/Create'))
const GameFormCreate = lazy(() => import(/* webpackChunkName: "create" *//* webpackMode: "lazy" */'./game/form/Create'))
const Fragoute = ({ children }) => <>{children}</>

const Root = ({
  locale, i18n, theme, games,
}) => (
  <LocaleProvider initial={locale} i18n={i18n}>
    <ThemeProvider initial={theme}>
      <Layout>
        <Suspense>
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
              <Landing path="/" />
              <Redirect from="index.html" to={process.env.PUBLIC_URL || '/'} />
              <GameFormCreate path="game/*" />
              <Game path="games/:gameKey" />
              <Round path="games/:gameKey/rounds/:round" />
            </Router>
          </GameProvider>
        </Suspense>
      </Layout>
    </ThemeProvider>
  </LocaleProvider>
)

export default Root
