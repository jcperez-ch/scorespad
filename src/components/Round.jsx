import React from 'react';
import { useTranslation } from 'react-i18next/hooks';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import BarToolbar from 'common/bar/Toolbar';
import BarTitle from 'common/bar/Title';
import WarnPlaceholder from 'common/WarnPlaceholder';
import GameGuard from './game/Guard';
import RoundGuard from './game/round/Guard';

import useGame from './game/useGame';
import LocaleMenu from './locale/Menu';
import ThemeMenu from './theme/Menu';
import GameUsedContext from './game/context/Used';
import Scores from './game/Scores';
import Championship from './game/round/Championship';
import PageViewTracker from './PageViewTracker';

const Round = ({ history, location, match }) => {
  const game = useGame(match.params);
  const [t] = useTranslation();
  const { gameKey, round } = match.params;

  const goToHome = () => history.push('/');
  const goToGame = () => history.push(`/games/${gameKey}`);
  const isActive = game && game.round === round;
  return (
    <GameUsedContext.Provider value={[gameKey, game, round]}>
      <BarToolbar>
        <IconButton color="inherit" onClick={game ? goToGame : goToHome}>
          <Icon>arrow_back</Icon>
        </IconButton>
        <BarTitle pl="0.5rem">
          <GameGuard game={game} fallback={null}>
            {game && game.name}
          </GameGuard>
        </BarTitle>
        <LocaleMenu />
        <ThemeMenu />
      </BarToolbar>
      <GameGuard game={game}>
        <RoundGuard
          fallback={
            <WarnPlaceholder icon="warning" message={t('text.roundNotFound')} />
          }
        >
          {isActive ? (
            <Scores round={round} onEnd={goToGame} />
          ) : (
            <Championship teams={game ? game.teams : []} round={round} />
          )}
        </RoundGuard>
      </GameGuard>
      <PageViewTracker pathname={location.pathname} />
    </GameUsedContext.Provider>
  );
};

export default Round;
