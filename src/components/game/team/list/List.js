import React from 'react';
import List from '@material-ui/core/List';

import useGame from 'components/game/useGame';
import noop from 'utils/fn/noop';
import TeamListEmpty from './Empty';
import TeamListItem from './Item';

export default function TeamList({ onClickChampionship = noop }) {
  const game = useGame();

  if (!game) {
    return null;
  }
  const { teams = [], round } = game;

  return teams.length === 0 ? (
    <TeamListEmpty />
  ) : (
    <List component="div">
      {teams.map((team, index) => (
        <TeamListItem key={team.name} index={index} onClickChampionship={onClickChampionship} round={round} {...team} />
      ))}
    </List>
  );
}
