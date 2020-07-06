import React from 'react'
import { useNavigate } from 'react-router-dom'

import GameGuard from './game/Guard'
import TeamList from './game/team/list/List'
import GameActionStart from './game/action/Start'
import PageViewTracker from './PageViewTracker'

const Game = () => {
  const navigate = useNavigate()
  const goToRound = (round) => navigate(`rounds/${round}`)

  return (
    <>
      <GameGuard>
        <TeamList onClickChampionship={goToRound} />
        <GameActionStart onStart={goToRound} />
      </GameGuard>
      <PageViewTracker />
    </>
  )
}

export default Game
