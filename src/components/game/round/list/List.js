import React from 'react';
import { isEmpty, noop } from 'lodash';
import TeamListEmpty from 'components/game/team/list/Empty';

import RoundListItem from './Item';
import RoundListWrapper from './Wrapper';

export default function RoundList({ teams = [], round, onSubmit = noop }) {
  return isEmpty(teams) ? (
    <TeamListEmpty />
  ) : (
    <RoundListWrapper>
      {teams.map((team, key) => (
        <RoundListItem key={team.name} index={key} round={round} onEnter={onSubmit} {...team} />
      ))}
    </RoundListWrapper>
  );
}
