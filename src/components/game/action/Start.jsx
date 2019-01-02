import React, { useContext } from 'react';
import { noop } from 'lodash';
import { useTranslation } from 'react-i18next/hooks';

import Tooltip from '@material-ui/core/Tooltip';
import StickyFabButton from 'common/StickyFabButton';
import GameStoreContext from 'components/game/context/Store';
import GameUsedContext from 'components/game/context/Used';
import { addRound } from '../actionCreators';

const GameActionStart = ({ onStart = noop }) => {
  const [t] = useTranslation();
  const [, dispatch] = useContext(GameStoreContext);
  const [gameKey, { round }] = useContext(GameUsedContext);
  const handleStart = () => {
    if (round === null) {
      const newRound = Date.now().toString(36);
      dispatch(addRound(gameKey, newRound));
      onStart(newRound);
    } else {
      onStart(round);
    }
  };

  return (
    <Tooltip title={t('button.startGame')}>
      <StickyFabButton
        color="primary"
        icon="play_arrow"
        aria-label={t('button.startGame')}
        onClick={handleStart}
      />
    </Tooltip>
  );
};

export default GameActionStart;
