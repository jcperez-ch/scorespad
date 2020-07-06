import React, { Suspense, useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from 'common/Layout'
import CommonSnackbar from 'common/Snackbar'
import Txt from 'common/Txt'

import Landing from './Landing'
import Game from './Game'
import Round from './Round'
import { TopGame, TopLanding, TopRound } from './Top'
import ThemeProvider from './theme/Provider'
import LocaleProvider from './locale/Provider'
import GameProvider from './game/Provider'

import GameActionShare from './game/action/Share'
import GameFormCreate from './game/form/Create'
import GameFormByName from './game/form/ByName'
import GameFormByScan from './game/form/ByScan'
import TeamFormCreate from './game/team/form/Create'

const Root = ({ locale, i18n, theme, games, hasUpdate, onUpdate }) => {
  const [updateWarning, setUpdateWarning] = useState(hasUpdate)
  const handleClose = () => setUpdateWarning(false)

  useEffect(() => {
    setUpdateWarning(hasUpdate)
  }, [hasUpdate])
  return (
    <BrowserRouter>
      <LocaleProvider initial={locale} i18n={i18n}>
        <ThemeProvider initial={theme}>
          <Layout>
            <Suspense>
              <GameProvider initial={games}>
                <Routes basename={process.env.PUBLIC_URL}>
                  <Route element={<TopLanding />} path="/" />
                  <Route path="games/:gameKey">
                    <Route element={<TopGame />} path="/" />
                    <Route element={<TopRound />} path="rounds/:round" />
                    <Route element={<TeamFormCreate />} path="team" />
                  </Route>
                </Routes>
                <Routes basename={process.env.PUBLIC_URL}>
                  <Route element={<Landing />} path="/" />
                  <Route element={<Game />} path="games/:gameKey" />
                  <Route element={<GameActionShare />} path="/share/:gameKey" />
                  <Route element={<Round />} path="games/:gameKey/rounds/:round" />
                  <Route element={<GameFormCreate />} path="game">
                    <Route element={<GameFormByName />} path="/" />
                    <Route element={<GameFormByScan />} path="scan" />
                  </Route>
                </Routes>
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
    </BrowserRouter>
  )
}

export default Root
