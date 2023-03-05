import { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import GameStoreContext from 'components/game/context/Store';

const useGame = () => {
  const [games] = useContext(GameStoreContext);
  const { gameKey } = useParams();
  return useMemo(() => games[gameKey], [games, gameKey]);
};

export default useGame;
