import React from 'react';
import BarToolbar from 'common/bar/Toolbar';
import EmptyBlock from 'common/EmptyBlock';
import BarTitle from 'common/bar/Title';
import Txt from 'common/Txt';

import LocaleMenu from './locale/Menu';
import ThemeMenu from './theme/Menu';
import GameActionAdd from './game/action/Add';
import GameList from './game/list/List';
import PageViewTracker from './PageViewTracker';

const Landing = ({ history, location }) => {
  const goToGame = id => history.push(`/games/${id}`);
  return (
    <>
      <BarToolbar>
        <EmptyBlock />
        <BarTitle>
          <Txt id="messages.selectGame" />
        </BarTitle>
        <LocaleMenu />
        <ThemeMenu />
      </BarToolbar>
      <GameList onItemClick={goToGame} />
      <GameActionAdd onAdd={goToGame} />
      <PageViewTracker pathname={location.pathname} />
    </>
  );
};

export default Landing;