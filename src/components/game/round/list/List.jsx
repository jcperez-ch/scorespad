import React from 'react';
import { isEmpty, noop } from 'lodash';
import Grid from '@material-ui/core/Grid';
import TeamListEmpty from 'components/game/team/list/Empty';
import RoundListItem from './Item';

const RoundList = ({ teams = [], round, onSubmit = noop }) => (isEmpty(teams) ? (
  <TeamListEmpty />
) : (
  <Grid
    container
    spacing={8}
    alignItems="flex-start"
    justify="center"
  >
    {teams.map((team, key) => (
      <RoundListItem
        key={team.name}
        index={key}
        round={round}
        onEnter={onSubmit}
        {...team}
      />
    ))}
  </Grid>
));

export default RoundList;
