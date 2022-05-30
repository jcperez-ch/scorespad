import React, { useContext } from 'react'
import { isEmpty, map } from 'lodash'
import List from '@material-ui/core/List'

import GameStoreContext from 'components/game/context/Store'
import GameListEmpty from './Empty'
import GameListItem from './Item'

export default ({ onItemClick }) => {
  const [games] = useContext(GameStoreContext)

  return isEmpty(games) ? (
    <GameListEmpty />
  ) : (
    <List component="div">
      {map(games, (game, key) => (
        <GameListItem key={key} id={key} onClick={onItemClick} {...game} />
      ))}
    </List>
  )
}
