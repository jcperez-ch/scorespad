import React, { useContext } from 'react'
import { get, noop } from 'lodash'
import { useTranslation } from 'react-i18next'

import StickyFabButton from 'common/StickyFabButton'
import GameStoreContext from 'components/game/context/Store'
import { addRound } from '../actionCreators'

const GameActionStart = ({ gameKey, game, onStart = noop }) => {
  const [t] = useTranslation()
  const [, dispatch] = useContext(GameStoreContext)
  const handleStart = () => {
    const { round } = game
    if (round === null) {
      const newRound = Date.now().toString(36)
      dispatch(addRound(gameKey, newRound))
      onStart(newRound)
    } else {
      onStart(round)
    }
  }

  return (
    get(game, 'teams.length', 0) > 1 && (
      <StickyFabButton tooltip={t('button.startGame')} color="primary" icon="play_arrow" aria-label={t('button.startGame')} onClick={handleStart} />
    )
  )
}

export default GameActionStart
