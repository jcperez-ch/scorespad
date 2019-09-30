import React from 'react'
import { render } from 'react-dom'
import i18n from 'i18next'
import 'reset-css/reset.css'

import Root from './components/Root'
import getI18n from './i18n'
import { getInitialState } from './utils/store'
import * as serviceWorker from './serviceWorker'
import './index.css'

const rootElement = document.getElementById('root')

const start = async () => {
  const initialState = await getInitialState()
  await getI18n(initialState.locale)
  render(<Root {...initialState} i18n={i18n} />, rootElement)
}

start()
serviceWorker.register({
  onUpdate() {
    console.log('something got updated? did not know') // eslint-disable-line no-console
  },
  onSuccess() {
    console.log('something got offline? did not know') // eslint-disable-line no-console
  },
})
