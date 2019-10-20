import React from 'react'

import GameGuard from './game/Guard'
import useGame from './game/useGame'
import TeamList from './game/team/list/List'
import GameActionStart from './game/action/Start'
import GameUsedContext from './game/context/Used'
import PageViewTracker from './PageViewTracker'

const Game = ({ gameKey, uri, navigate }) => {
  const game = useGame({ gameKey })
  const goToRound = (round) => navigate(`rounds/${round}`)
  return (
    <GameUsedContext.Provider value={[gameKey, game]}>
      <GameGuard game={game}>
        <TeamList onClickChampionship={goToRound} />
        <GameActionStart gameKey={gameKey} game={game} onStart={goToRound} />
      </GameGuard>
      <PageViewTracker uri={uri} />
    </GameUsedContext.Provider>
  )
}

export default Game
