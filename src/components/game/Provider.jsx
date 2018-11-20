import React, { useReducer } from 'react';
import Storage from 'common/Storage';

import GameContext from './Context';
import reducer from './reducer';

const GameProvider = ({ children }) => {
  const storage = 'gms';
  const gameStore = useReducer(
    reducer,
    JSON.parse(window.localStorage.getItem(storage)) || {},
  );
  const [gameState] = gameStore;
  return (
    <GameContext.Provider value={gameStore}>
      <Storage index={storage} value={gameState} json />
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
