import React, { useContext } from 'react';
import { isEmpty, noop } from 'lodash';
import List from '@material-ui/core/List';

import GameUsedContext from 'components/game/context/Used';
import TeamListEmpty from './Empty';
import TeamListItem from './Item';

const TeamList = ({ onItemClick = noop }) => {
  const [, game] = useContext(GameUsedContext);

  if (!game) {
    return null;
  }
  const { teams = [], round } = game;

  return isEmpty(teams) ? (
    <TeamListEmpty />
  ) : (
    <List component="div">
      {teams.map((team, key) => (
        <TeamListItem
          key={team.name}
          index={key}
          onClick={onItemClick}
          round={round}
          {...team}
        />
      ))}
    </List>
  );
};

export default TeamList;
