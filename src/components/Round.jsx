import React from 'react';
import { useTranslation } from 'react-i18next';

import WarnPlaceholder from 'common/WarnPlaceholder';
import GameGuard from './game/Guard';
import RoundGuard from './game/round/Guard';

import useGame from './game/useGame';
import GameUsedContext from './game/context/Used';
import Scores from './game/Scores';
import Championship from './game/round/Championship';
import PageViewTracker from './PageViewTracker';

const Round = ({
  gameKey, round, uri, navigate,
}) => {
  const game = useGame({ gameKey });
  const [t] = useTranslation();

  const goToGame = () => navigate('../..');
  const isActive = game && game.round === round;
  return (
    <GameUsedContext.Provider value={[gameKey, game, round]}>
      <GameGuard game={game}>
        <RoundGuard
          gameKey={gameKey}
          round={round}
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
      <PageViewTracker uri={uri} />
    </GameUsedContext.Provider>
  );
};

export default Round;
