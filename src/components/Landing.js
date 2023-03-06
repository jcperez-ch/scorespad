import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import StickyFabButton from 'common/StickyFabButton';
import BarToolbar from 'common/bar/Toolbar';
import BarTitle from 'common/bar/Title';
import EmptyBlock from 'common/EmptyBlock';
import Txt from 'common/Txt';
import GameStoreContext from 'components/game/context/Store';

import WarnPlaceholder from 'common/WarnPlaceholder';
import GameList from './game/list/List';
import LocaleMenu from './locale/Menu';
import ThemeMenu from './theme/Menu';
import PageViewTracker from './PageViewTracker';

export default function Landing() {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const goToGame = (id) => navigate(`games/${id}`);
  const goToCreateGame = () => navigate('game');
  const [games] = useContext(GameStoreContext);

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
      {Object.keys(games).length === 0 ? (
        <WarnPlaceholder icon="games" message={t('text.noGames')}>
          <Button variant="contained" color="primary" onClick={goToCreateGame}>
            {t('button.createGame')}
          </Button>
        </WarnPlaceholder>
      ) : (
        <>
          <GameList onItemClick={goToGame} />
          <StickyFabButton
            tooltip={t('button.createGame')}
            color="primary"
            aria-haspopup="true"
            aria-label={t('button.createGame')}
            icon="add"
            onClick={goToCreateGame}
          />
        </>
      )}
      <PageViewTracker />
    </>
  );
}
