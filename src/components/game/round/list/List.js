import React from 'react';
import TeamListEmpty from 'components/game/team/list/Empty';
import noop from 'utils/fn/noop';

import RoundListItem from './Item';
import RoundListWrapper from './Wrapper';

export default function RoundList({ teams = [], round, onSubmit = noop }) {
  return teams.length === 0 ? (
    <TeamListEmpty />
  ) : (
    <RoundListWrapper>
      {teams.map((team, key) => (
        <RoundListItem key={team.name} index={key} round={round} onEnter={onSubmit} {...team} />
      ))}
    </RoundListWrapper>
  );
}
