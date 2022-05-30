import React, { useReducer } from 'react'
import Storage from 'common/Storage'
import GameStoreContext from 'components/game/context/Store'
import gaTracking from 'utils/gaTracking'
import reducer from './reducer'

export default ({ initial = {}, children }) => {
  const storage = 'gms'
  const gameStore = useReducer(gaTracking(reducer), initial)
  const [gameState] = gameStore
  return (
    <GameStoreContext.Provider value={gameStore}>
      <Storage index={storage} value={gameState} />
      {children}
    </GameStoreContext.Provider>
  )
}
