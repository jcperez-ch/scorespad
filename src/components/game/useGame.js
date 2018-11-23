import { useContext, useMemo } from 'react';
import { find } from 'lodash';

import GameStoreContext from 'components/game/context/Store';

const useGame = ({ gameKey }) => {
  const [games] = useContext(GameStoreContext);
  return useMemo(() => find(games, (_, key) => gameKey === key), [
    games,
    gameKey,
  ]);
};

export default useGame;
