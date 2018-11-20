import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import StyledToolbar from 'common/StyledToolbar';
import EmptyBlock from 'common/EmptyBlock';
import StyledTitle from 'common/StyledTitle';
import Txt from 'common/Txt';

import LocaleMenu from './locale/Menu';

const Game = () => (
  <>
    <AppBar position="static">
      <StyledToolbar>
        <EmptyBlock />
        <StyledTitle>
          <Txt id="placeholder.gameName" />
        </StyledTitle>
        <LocaleMenu />
      </StyledToolbar>
    </AppBar>
  </>
);

export default Game;
