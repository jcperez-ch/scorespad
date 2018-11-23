import React, { useReducer } from 'react';
import Storage from 'common/Storage';
import GameStoreContext from 'components/game/context/Store';
import reducer from './reducer';

const GameProvider = ({ children }) => {
  const storage = 'gms';
  const gameStore = useReducer(
    reducer,
    JSON.parse(window.localStorage.getItem(storage)) || {},
  );
  const [gameState] = gameStore;
  return (
    <GameStoreContext.Provider value={gameStore}>
      <Storage index={storage} value={gameState} json />
      {children}
    </GameStoreContext.Provider>
  );
};

export default GameProvider;
