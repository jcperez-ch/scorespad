import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import BarToolbar from 'common/bar/Toolbar';
import BarTitle from 'common/bar/Title';
import GameGuard from './game/Guard';
import useGame from './game/useGame';
import LocaleMenu from './locale/Menu';
import TeamList from './game/team/list/List';
import GameActionStart from './game/action/Start';
import TeamActionAdd from './game/team/action/Add';
import GameUsedContext from './game/context/Used';
import PageViewTracker from './PageViewTracker';

const Game = ({ history, location, match }) => {
  const game = useGame(match.params);
  const { gameKey } = match.params;
  const goToHome = () => history.push('/');
  const goToRound = round => history.push(`/games/${gameKey}/rounds/${round}`);
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
        {game && <TeamActionAdd sticky />}
        <LocaleMenu />
      </BarToolbar>
      <GameGuard game={game}>
        <TeamList />
        <GameActionStart onStart={goToRound} />
      </GameGuard>
      <PageViewTracker pathname={location.pathname} />
    </GameUsedContext.Provider>
  );
};

export default Game;
