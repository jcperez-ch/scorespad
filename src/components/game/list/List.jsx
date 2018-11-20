import React, { useContext } from 'react';
import { isEmpty, map } from 'lodash';
import List from '@material-ui/core/List';

import GameListEmpty from './Empty';
import GameListItem from './Item';

import GameContext from '../Context';

const GameList = ({ onItemClick }) => {
  const [games] = useContext(GameContext);
  return isEmpty(games) ? (
    <GameListEmpty />
  ) : (
    <List>
      {map(games, (game, key) => (
        <GameListItem key={key} id={key} onClick={onItemClick} {...game} />
      ))}
    </List>
  );
};

export default GameList;
