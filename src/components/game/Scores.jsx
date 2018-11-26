import React, { useContext, useState } from 'react';

import GameUsedContext from './context/Used';
import GameStoreContext from './context/Store';
import GameScoresContext from './context/Scores';
import RoundList from './round/List';
import RoundEnd from './round/End';
import { addScores } from './team/actionCreators';

const GameScores = ({ round, onEnd }) => {
  const [gameKey, { teams = [] }] = useContext(GameUsedContext);
  const [, dispatch] = useContext(GameStoreContext);
  const initialState = Array.from({ length: teams.length }, () => '');
  const state = useState(initialState);
  const handleSubmit = () => {
    const [scores, setScores] = state;
    if (scores.some(score => typeof Number(score) === 'number')) {
      dispatch(addScores(gameKey, round, scores.map(score => Number(score))));
      setScores(initialState);
    }
  };
  return (
    <GameScoresContext.Provider value={state}>
      <RoundList teams={teams} round={round} onSubmit={handleSubmit} />
      <RoundEnd gameKey={gameKey} round={round} onEnd={onEnd} />
    </GameScoresContext.Provider>
  );
};

export default GameScores;
