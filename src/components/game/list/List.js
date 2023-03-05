import React, { useContext } from 'react';
import List from '@material-ui/core/List';

import GameStoreContext from 'components/game/context/Store';
import GameListEmpty from './Empty';
import GameListItem from './Item';

export default function GameList({ onItemClick }) {
  const [games] = useContext(GameStoreContext);
  const gamesKeys = Object.keys(games);

  return gamesKeys.length === 0 ? (
    <GameListEmpty />
  ) : (
    <List component="div">
      {gamesKeys.map((gameKey) => (
        <GameListItem key={gameKey} id={gameKey} onClick={onItemClick} {...games[gameKey]} />
      ))}
    </List>
  );
}
