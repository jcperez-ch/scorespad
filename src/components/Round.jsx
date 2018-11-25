import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import BarToolbar from 'common/bar/Toolbar';
import BarTitle from 'common/bar/Title';
import GameGuard from './game/Guard';
import TeamRoundList from './game/team/round/List';
import useGame from './game/useGame';
import LocaleMenu from './locale/Menu';
import GameUsedContext from './game/context/Used';

const Round = ({ history, match }) => {
  const game = useGame(match.params);
  const { gameKey, round } = match.params;
  const goToGame = () => history.push(`/games/${gameKey}`);
  return (
    <GameUsedContext.Provider value={[gameKey, game]}>
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
        <TeamRoundList {...game || {}} round={round} />
      </GameGuard>
    </GameUsedContext.Provider>
  );
};

export default Round;
