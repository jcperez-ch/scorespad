import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

import WarnPlaceholder from 'common/WarnPlaceholder'
import GameGuard from './game/Guard'
import RoundGuard from './game/round/Guard'

import useGame from './game/useGame'
import Scores from './game/Scores'
import Championship from './game/round/Championship'
import RoundTop from './game/round/Top'
import PageViewTracker from './PageViewTracker'

const Round = () => {
  const { round } = useParams()
  const game = useGame()
  const [t] = useTranslation()
  const navigate = useNavigate()

  const goToGame = () => navigate('../..')
  const isActive = game && game.round === round
  return (
    <>
      <RoundTop />
      <GameGuard>
        <RoundGuard fallback={<WarnPlaceholder icon="warning" message={t('text.roundNotFound')} />}>
          {isActive ? <Scores round={round} onEnd={goToGame} /> : <Championship teams={game ? game.teams : []} round={round} />}
        </RoundGuard>
      </GameGuard>
      <PageViewTracker />
    </>
  )
}

export default Round
