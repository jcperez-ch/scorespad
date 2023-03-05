import React from 'react';
import { useTranslation } from 'react-i18next';
import WarnPlaceholder from 'common/WarnPlaceholder';
import noop from 'utils/fn/noop';

import RoundListItem from './Item';
import RoundListWrapper from './Wrapper';

export default function RoundList({ teams = [], round, onSubmit = noop }) {
  const [t] = useTranslation();
  return teams.length === 0 ? (
    <WarnPlaceholder icon="people" message={t('text.noTeams')} />
  ) : (
    <RoundListWrapper>
      {teams.map((team, key) => (
        <RoundListItem key={team.name} index={key} round={round} onEnter={onSubmit} {...team} />
      ))}
    </RoundListWrapper>
  );
}
