import React from 'react'
import { useTranslation } from 'react-i18next'
import WarnPlaceholder from 'common/WarnPlaceholder'

export default () => {
  const [t] = useTranslation()
  return <WarnPlaceholder icon="games" message={t('text.noGames')} />
}
