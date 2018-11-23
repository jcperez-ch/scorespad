import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import BarToolbar from 'common/bar/Toolbar';
import BarTitle from 'common/bar/Title';
import GameGuard from './game/Guard';
import useGame from './game/useGame';
import LocaleMenu from './locale/Menu';
import TeamList from './game/team/list/List';
import TeamActionAdd from './game/team/action/Add';
import GameUsedContext from './game/context/Used';

const Game = ({ history, match }) => {
  const goToHome = () => history.push('/');
  const game = useGame(match.params);
  const { gameKey } = match.params;
  return (
    <GameUsedContext.Provider value={[gameKey, game]}>
      <BarToolbar>
        <IconButton color="inherit" onClick={goToHome}>
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
        <TeamList {...game || {}} />
        <TeamActionAdd />
      </GameGuard>
    </GameUsedContext.Provider>
  );
};

export default Game;
