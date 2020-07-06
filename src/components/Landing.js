import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import StickyFabButton from 'common/StickyFabButton'

import GameList from './game/list/List'
import PageViewTracker from './PageViewTracker'

const Landing = () => {
  const [t] = useTranslation()
  const navigate = useNavigate()
  const goToGame = (id) => navigate(`games/${id}`)
  const goToCreateGame = () => navigate('game')

  return (
    <>
      <GameList onItemClick={goToGame} />
      <StickyFabButton
        tooltip={t('button.createGame')}
        color="primary"
        aria-haspopup="true"
        aria-label={t('button.createGame')}
        icon="add"
        onClick={goToCreateGame}
      />
      <PageViewTracker />
    </>
  )
}

export default Landing
