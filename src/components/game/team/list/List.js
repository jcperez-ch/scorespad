import React from 'react';
import { useTranslation } from 'react-i18next';
import List from '@material-ui/core/List';

import WarnPlaceholder from 'common/WarnPlaceholder';
import useGame from 'components/game/useGame';
import noop from 'utils/fn/noop';
import TeamListItem from './Item';

export default function TeamList({ onClickChampionship = noop }) {
  const game = useGame();
  const [t] = useTranslation();

  if (!game) {
    return null;
  }
  const { teams = [], round } = game;

  return teams.length === 0 ? (
    <WarnPlaceholder icon="people" message={t('text.noTeams')} />
  ) : (
    <List component="div">
      {teams.map((team, index) => (
        <TeamListItem key={team.name} index={index} onClickChampionship={onClickChampionship} round={round} {...team} />
      ))}
    </List>
  );
}
