import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import StickyFabButton from 'common/StickyFabButton';
import GameStoreContext from 'components/game/context/Store';
import useGame from 'components/game/useGame';
import noop from 'utils/fn/noop';
import { addRound } from '../actionCreators';

export default function GameActionStart({ onStart = noop }) {
  const game = useGame();
  const { gameKey } = useParams();
  const [t] = useTranslation();
  const [, dispatch] = useContext(GameStoreContext);

  const handleStart = () => {
    const { round } = game;
    if (round === null) {
      const newRound = Date.now().toString(36);
      dispatch(addRound(gameKey, newRound));
      onStart(newRound);
    } else {
      onStart(round);
    }
  };

  return (
    game.teams.length > 1 && (
      <StickyFabButton tooltip={t('button.startGame')} color="primary" icon="play_arrow" aria-label={t('button.startGame')} onClick={handleStart} />
    )
  );
}
