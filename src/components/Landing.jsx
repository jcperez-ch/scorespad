import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import StyledToolbar from 'common/StyledToolbar';
import EmptyBlock from 'common/EmptyBlock';
import StyledTitle from 'common/StyledTitle';
import Txt from 'common/Txt';

import LocaleMenu from './locale/Menu';

import GameActionAdd from './game/action/Add';
import GameList from './game/list/List';

const Landing = ({ history }) => {
  const goToGame = id => history.push(`/games/${id}`);
  return (
    <>
      <AppBar position="static">
        <StyledToolbar>
          <EmptyBlock />
          <StyledTitle>
            <Txt id="messages.selectGame" />
          </StyledTitle>
          <LocaleMenu />
          <GameActionAdd onAdd={goToGame} />
        </StyledToolbar>
      </AppBar>
      <GameList onItemClick={goToGame} />
    </>
  );
};

export default Landing;
