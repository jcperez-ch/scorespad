import { useReducer } from 'react';

import Storage from '@/components/Storage';
import GamesContext from '@/config/GamesContext';

import { StoreState } from './State';
import reducer from './reducer';

type Props = {
  initial?: StoreState['games'];
  children: React.ReactNode;
};

export default function StoreProvider({ initial = {}, children }: Props) {
  const storage = 'gms';
  const gameStore = useReducer(reducer, initial);
  const [gameState] = gameStore;
  return (
    <GamesContext.Provider value={gameStore}>
      <Storage index={storage} value={gameState} />
      {children}
    </GamesContext.Provider>
  );
}
