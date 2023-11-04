import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';

import SlideLongRippleSwitch from 'common/SlideLongRippleSwitch';
import StyledScore from 'common/StyledScore';
import useLongRipple from 'common/useLongRipple';
import RoundScoreRemove from './form/ScoreRemove';

export default function RoundScore({ index, score, scoreIndex }) {
  const [canClose, setCanClose] = useState(false);
  const handleEditMode = () => setCanClose(true);
  const handleViewMode = () => setCanClose(false);
  const rippleProps = useLongRipple({ onLongPress: handleEditMode });

  return (
    <SlideLongRippleSwitch active={canClose ? 0 : 1}>
      <RoundScoreRemove onClose={handleViewMode} onSuccess={handleViewMode} scoreIndex={scoreIndex} score={score} index={index} />
      <ListItem button dense {...rippleProps}>
        <StyledScore>{score}</StyledScore>
      </ListItem>
    </SlideLongRippleSwitch>
  );
}
