import React from 'react';
import BarToolbar from 'common/bar/Toolbar';
import EmptyBlock from 'common/EmptyBlock';
import BarTitle from 'common/bar/Title';
import Txt from 'common/Txt';

import LocaleMenu from './locale/Menu';

import GameActionAdd from './game/action/Add';
import GameList from './game/list/List';

const Landing = ({ history }) => {
  const goToGame = id => history.push(`/games/${id}`);
  return (
    <>
      <BarToolbar>
        <EmptyBlock />
        <BarTitle>
          <Txt id="messages.selectGame" />
        </BarTitle>
        <LocaleMenu />
        <GameActionAdd onAdd={goToGame} />
      </BarToolbar>
      <GameList onItemClick={goToGame} />
    </>
  );
};

export default Landing;
