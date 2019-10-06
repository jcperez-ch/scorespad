import React from 'react'
import { useTranslation } from 'react-i18next'
import Tooltip from '@material-ui/core/Tooltip'
import StickyFabButton from 'common/StickyFabButton'

import GameList from './game/list/List'
import PageViewTracker from './PageViewTracker'

const Landing = ({ navigate, uri }) => {
  const [t] = useTranslation()
  const goToGame = (id) => navigate(`games/${id}`)
  const goToCreateGame = () => navigate('game')

  return (
    <>
      <GameList onItemClick={goToGame} />
      <Tooltip title={t('button.createGame')}>
        <StickyFabButton
          color="primary"
          aria-haspopup="true"
          aria-label={t('button.createGame')}
          icon="add"
          onClick={goToCreateGame}
        />
      </Tooltip>
      <PageViewTracker uri={uri} />
    </>
  )
}

export default Landing
