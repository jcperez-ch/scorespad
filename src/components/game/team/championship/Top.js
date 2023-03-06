import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

import BarToolbar from 'common/bar/Toolbar';
import BarTitle from 'common/bar/Title';
import LocaleMenu from 'components/locale/Menu';
import ThemeMenu from 'components/theme/Menu';

export default function TeamChampionshipTop({ title }) {
  const navigate = useNavigate();
  const goToGame = () => navigate(-1);

  return (
    <BarToolbar>
      <IconButton color="inherit" onClick={goToGame} size="large">
        <Icon>arrow_back</Icon>
      </IconButton>
      <BarTitle>{title}</BarTitle>
      <LocaleMenu />
      <ThemeMenu />
    </BarToolbar>
  );
}
