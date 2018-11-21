import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import BarToolbar from 'common/bar/Toolbar';
import BarTitle from 'common/bar/Title';
import Txt from 'common/Txt';

import LocaleMenu from './locale/Menu';

const Game = ({ history }) => {
  const goToHome = () => history.push('/');
  return (
    <>
      <BarToolbar>
        <IconButton color="inherit" onClick={goToHome}>
          <Icon>arrow_back</Icon>
        </IconButton>
        <BarTitle pl="0.5rem">
          <Txt id="placeholder.gameName" />
        </BarTitle>
        <LocaleMenu />
      </BarToolbar>
    </>
  );
};

export default Game;
