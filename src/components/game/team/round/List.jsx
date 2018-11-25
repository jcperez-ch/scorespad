import React from 'react';
import { isEmpty, noop } from 'lodash';
import Grid from '@material-ui/core/Grid';
import TeamListEmpty from 'components/game/list/Empty';
import TeamRoundItem from './Item';

const TeamRoundList = ({ teams = [], round, onItemClick = noop }) => (isEmpty(teams) ? (
  <TeamListEmpty />
) : (
  <Grid
    container
    spacing={8}
    alignItems="flex-start"
    justify="center"
  >
    {teams.map((team, key) => (
      <TeamRoundItem
        key={team.name}
        index={key}
        onClick={onItemClick}
        round={round}
        {...team}
      />
    ))}
  </Grid>
));

export default TeamRoundList;
