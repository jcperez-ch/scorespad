import React from 'react';
import BarToolbar from 'common/bar/Toolbar';
import EmptyBlock from 'common/EmptyBlock';
import BarTitle from 'common/bar/Title';
import Txt from 'common/Txt';

import LocaleMenu from './locale/Menu';

const Game = () => (
  <>
    <BarToolbar>
      <EmptyBlock />
      <BarTitle>
        <Txt id="placeholder.gameName" />
      </BarTitle>
      <LocaleMenu />
    </BarToolbar>
  </>
);

export default Game;
