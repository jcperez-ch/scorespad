import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import BarToolbar from 'common/bar/Toolbar';
import BarTitle from 'common/bar/Title';
import GameGuard from './game/Guard';

import useGame from './game/useGame';
import LocaleMenu from './locale/Menu';
import GameUsedContext from './game/context/Used';
import Scores from './game/Scores';

const Round = ({ history, match }) => {
  const game = useGame(match.params);
  const { gameKey, round } = match.params;

  const goToGame = () => history.push(`/games/${gameKey}`);
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
      </BarToolbar>
      <GameGuard game={game}>
        <Scores round={round} onEnd={goToGame} />
      </GameGuard>
    </GameUsedContext.Provider>
  );
};

export default Round;
