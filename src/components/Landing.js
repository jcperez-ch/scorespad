import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import StickyFabButton from 'common/StickyFabButton';
import BarToolbar from 'common/bar/Toolbar';
import BarTitle from 'common/bar/Title';
import EmptyBlock from 'common/EmptyBlock';
import Txt from 'common/Txt';

import GameList from './game/list/List';
import LocaleMenu from './locale/Menu';
import ThemeMenu from './theme/Menu';
import PageViewTracker from './PageViewTracker';

export default function Landing() {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const goToGame = (id) => navigate(`games/${id}`);
  const goToCreateGame = () => navigate('game');

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
      <StickyFabButton
        tooltip={t('button.createGame')}
        color="primary"
        aria-haspopup="true"
        aria-label={t('button.createGame')}
        icon="add"
        onClick={goToCreateGame}
      />
      <PageViewTracker />
    </>
  );
}
