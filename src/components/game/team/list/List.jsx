import React from 'react';
import { isEmpty, noop } from 'lodash';
import List from '@material-ui/core/List';

import TeamListEmpty from './Empty';
import TeamListItem from './Item';

const TeamList = ({ teams = [], round, onItemClick = noop }) => (isEmpty(teams) ? (
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
));

export default TeamList;
