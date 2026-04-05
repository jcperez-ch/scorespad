import { useContext, useMemo } from 'react';
import { useParams } from 'react-router';

import GamesContext from '@/config/GamesContext';
import { Game } from '@/store/State';

export default function useGame(): Game {
  const [games] = useContext(GamesContext);
  const { gameKey } = useParams();
  return useMemo(() => {
    if (gameKey != null && games[gameKey] != null) {
      return games[gameKey];
    }
    throw new Error('Game not found');
  }, [games, gameKey]);
}
