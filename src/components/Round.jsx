import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import BarToolbar from 'common/bar/Toolbar';
import BarTitle from 'common/bar/Title';
import GameGuard from './game/Guard';
import RoundGuard from './game/round/Guard';

import useGame from './game/useGame';
import LocaleMenu from './locale/Menu';
import ThemeMenu from './theme/Menu';
import GameUsedContext from './game/context/Used';
import Scores from './game/Scores';
import Championship from './game/round/Championship';

const Round = ({ history, match }) => {
  const game = useGame(match.params);
  const { gameKey, round } = match.params;

  const goToGame = () => history.push(`/games/${gameKey}`);
  const isActive = game.round === round;
  return (
    <GameUsedContext.Provider value={[gameKey, game, round]}>
      <BarToolbar>
        <IconButton color="inherit" onClick={goToGame}>
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
        <RoundGuard>
          {isActive ? (
            <Scores round={round} onEnd={goToGame} />
          ) : (
            <Championship teams={game.teams} round={round} />
          )}
        </RoundGuard>
      </GameGuard>
    </GameUsedContext.Provider>
  );
};

export default Round;
