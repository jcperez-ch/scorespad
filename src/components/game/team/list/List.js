import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import StyledPrimaryButton from 'common/styled/StyledPrimaryButton';

import WarnPlaceholder from 'common/WarnPlaceholder';
import useGame from 'components/game/useGame';
import noop from 'utils/fn/noop';
import TeamListItem from './Item';

export default function TeamList({ onClickChampionship = noop }) {
  const game = useGame();
  const [t] = useTranslation();
  const navigate = useNavigate();
  const goToAddTeam = () => navigate('team');

  if (!game) {
    return null;
  }
  const { teams = [], round } = game;

  return teams.length === 0 ? (
    <WarnPlaceholder icon="people" message={t('text.noTeams')}>
      <StyledPrimaryButton variant="contained" color="primary" onClick={goToAddTeam}>
        {t('button.addTeam')}
      </StyledPrimaryButton>
    </WarnPlaceholder>
  ) : (
    <List component="div">
      {teams.map((team, index) => (
        <TeamListItem key={team.name} index={index} onClickChampionship={onClickChampionship} round={round} {...team} />
      ))}
    </List>
  );
}
