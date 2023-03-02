import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonsWrapper from 'common/ButtonsWrapper';

import GameStoreContext from './context/Store';
import GameScoresContext from './context/Scores';
import RoundList from './round/list/List';
import RoundEnd from './round/action/End';
import { addScores } from './round/actionCreators';
import useGame from './useGame';

export default function GameScores({ round, onEnd }) {
  const { gameKey } = useParams();
  const { teams = [] } = useGame();
  const [, dispatch] = useContext(GameStoreContext);
  const initialState = Array.from({ length: teams.length }, () => '');
  const state = useState(initialState);
  const [t] = useTranslation();

  const handleSubmit = () => {
    const [scores, setScores] = state;
    if (scores.some((score) => typeof Number(score) === 'number')) {
      dispatch(
        addScores(
          gameKey,
          round,
          scores.map((score) => Number.parseInt(score, 10)),
        ),
      );
      setScores(initialState);
    }
  };
  return (
    <GameScoresContext.Provider value={state}>
      <RoundList teams={teams} round={round} onSubmit={handleSubmit} />
      <ButtonsWrapper>
        <Button icon="plus" color="primary" variant="contained" onClick={handleSubmit}>
          {t('button.sum')}
        </Button>
      </ButtonsWrapper>
      <RoundEnd gameKey={gameKey} round={round} onEnd={onEnd} />
    </GameScoresContext.Provider>
  );
}
