import React, { Suspense, lazy, useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from 'common/Layout'
import CommonSnackbar from 'common/Snackbar'
import Txt from 'common/Txt'

import Landing from './Landing'
import Game from './Game'
import ThemeProvider from './theme/Provider'
import LocaleProvider from './locale/Provider'
import GameProvider from './game/Provider'

const LazyGameFormCreate = lazy(() => import(/* webpackChunkName: "gc" */ './game/form/Create'))
const LazyGameFormByName = lazy(() => import(/* webpackChunkName: "gc" */ './game/form/ByName'))
const LazyGameActionShare = lazy(() => import(/* webpackChunkName: "gs" */ './game/action/Share'))
const LazyGameFormByScan = lazy(() => import(/* webpackChunkName: "gc" */ './game/form/ByScan'))
const LazyRound = lazy(() => import(/* webpackChunkName: "r" */ './Round'))
const LazyChampionshipsList = lazy(() => import(/* webpackChunkName: "ch" */ './ChampionshipsList'))
const LazyTeamFormCreate = lazy(() => import(/* webpackChunkName: "tc" */ './game/team/form/Create'))

export default ({ locale, i18n, theme, games, hasUpdate, onUpdate }) => {
  const [updateWarning, setUpdateWarning] = useState(hasUpdate)
  const handleClose = () => setUpdateWarning(false)

  useEffect(() => {
    setUpdateWarning(hasUpdate)
  }, [hasUpdate])
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <LocaleProvider initial={locale} i18n={i18n}>
        <ThemeProvider initial={theme}>
          <Layout>
            <Suspense>
              <GameProvider initial={games}>
                <Routes>
                  <Route element={<Landing />} index />
                  <Route element={<Game />} path="games/:gameKey" />
                  <Route element={<LazyTeamFormCreate />} path="games/:gameKey/team" />
                  <Route element={<LazyRound />} path="games/:gameKey/rounds/:round" />
                  <Route element={<LazyChampionshipsList />} path="games/:gameKey/championships/:index" />
                  <Route element={<LazyGameActionShare />} path="share/:gameKey" />
                  <Route element={<LazyGameFormCreate />} path="game">
                    <Route element={<LazyGameFormByName />} index />
                    <Route element={<LazyGameFormByScan />} path="scan" />
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
