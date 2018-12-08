import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';

import SlideLongRippleSwitch from 'common/SlideLongRippleSwitch';
import StyledScore from 'common/StyledScore';
import RoundScoreRemove from './form/ScoreRemove';

const GameRoundScore = ({ index, score, scoreIndex }) => {
  const [canClose, setCanClose] = useState(false);
  const handleEditMode = () => setCanClose(true);
  const handleViewMode = () => setCanClose(false);
  const render = (
    <RoundScoreRemove
      onClose={handleViewMode}
      onSuccess={handleViewMode}
      scoreIndex={scoreIndex}
      score={score}
      index={index}
    />
  );
  return (
    <SlideLongRippleSwitch
      on={canClose}
      setOn={handleEditMode}
      render={render}
      rippleComponent={ListItem}
      rippleProps={{
        button: true,
        dense: true,
      }}
    >
      <StyledScore variant="body2">{score}</StyledScore>
    </SlideLongRippleSwitch>
  );
};

export default GameRoundScore;
