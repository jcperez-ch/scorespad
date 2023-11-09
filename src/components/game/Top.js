import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Tooltip from '@mui/material/Tooltip';

import BarToolbar from 'common/bar/Toolbar';
import BarTitle from 'common/bar/Title';

import useGame from './useGame';
import GameMenu from './menu/GameMenu';

export default function GameTop() {
  const game = useGame();
  const navigate = useNavigate();
  const goToHome = () => navigate('/');
  const goToAddTeam = () => navigate('team');

  const [t] = useTranslation();
  return (
    <BarToolbar>
      <IconButton color="inherit" onClick={goToHome} size="large">
        <Icon>arrow_back</Icon>
      </IconButton>
      <BarTitle pl="0.5rem">{game && game.name}</BarTitle>
      {game.teams.length > 0 && (
        <Tooltip disableTouchListener title={t('button.addTeam')}>
          <IconButton color="inherit" aria-label={t('button.addTeam')} onClick={goToAddTeam} size="large">
            <Icon>add</Icon>
          </IconButton>
        </Tooltip>
      )}
      <GameMenu />
    </BarToolbar>
  );
}
