import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import BarToolbar from 'common/bar/Toolbar';
import BarTitle from 'common/bar/Title';
import LocaleMenu from 'components/locale/Menu';
import ThemeMenu from 'components/theme/Menu';

export default function TeamChampionshipTop({ title }) {
  const navigate = useNavigate();
  const goToGame = () => navigate(-1);

  return (
    <BarToolbar>
      <IconButton color="inherit" onClick={goToGame}>
        <Icon>arrow_back</Icon>
      </IconButton>
      <BarTitle>{title}</BarTitle>
      <LocaleMenu />
      <ThemeMenu />
    </BarToolbar>
  );
}
