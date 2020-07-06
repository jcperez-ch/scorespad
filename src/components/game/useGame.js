import { find } from 'lodash'
import { useContext, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import GameStoreContext from 'components/game/context/Store'

const useGame = () => {
  const [games] = useContext(GameStoreContext)
  const { gameKey } = useParams()
  return useMemo(() => find(games, (_, key) => gameKey === key), [games, gameKey])
}

export default useGame
