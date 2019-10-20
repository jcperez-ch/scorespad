import React, {
  Fragment, Suspense, useState, useEffect,
} from 'react'
import { Router, Redirect } from '@reach/router'

import Layout from 'common/Layout'
import CommonSnackbar from 'common/Snackbar'
import Txt from 'common/Txt'

import Landing from './Landing'
import Game from './Game'
import Round from './Round'
import { TopLanding, TopGame, TopRound } from './Top'
import ThemeProvider from './theme/Provider'
import LocaleProvider from './locale/Provider'
import GameProvider from './game/Provider'

import TeamFormCreate from './game/team/form/Create'
import GameFormCreate from './game/form/Create'

const Fragoute = ({ children }) => <>{children}</>

const Root = ({
  locale, i18n, theme, games, hasUpdate, onUpdate,
}) => {
  const [updateWarning, setUpdateWarning] = useState(hasUpdate)
  const handleClose = () => setUpdateWarning(false)

  useEffect(() => {
    setUpdateWarning(hasUpdate)
  }, [hasUpdate])
  return (
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
            <CommonSnackbar open={updateWarning} onUpdate={onUpdate} onClose={handleClose}>
              <span id="message-id">
                <Txt id="text.newVersion" />
              </span>
            </CommonSnackbar>
          </Suspense>
        </Layout>
      </ThemeProvider>
    </LocaleProvider>
  )
}

export default Root
