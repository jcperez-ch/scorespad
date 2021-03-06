import React from 'react'
import { useTranslation } from 'react-i18next'
import WarnPlaceholder from 'common/WarnPlaceholder'

import useGame from './useGame'

const GameGuard = ({ children, fallback }) => {
  const game = useGame()
  const [t] = useTranslation()
  return game ? children : fallback || <WarnPlaceholder icon="warning" message={t('text.gameNotFound')} />
}

export default GameGuard
