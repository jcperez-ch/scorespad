import React from 'react'
import { useTranslation } from 'react-i18next'
import WarnPlaceholder from 'common/WarnPlaceholder'

const GameGuard = ({ children, game, fallback }) => {
  const [t] = useTranslation()

  if (game) {
    return children
  }

  return fallback === undefined ? (
    <WarnPlaceholder icon="warning" message={t('text.gameNotFound')} />
  ) : (
    fallback
  )
}

export default GameGuard
