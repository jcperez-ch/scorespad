import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import SlideLongRippleSwitch from 'common/SlideLongRippleSwitch';
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
      <ListItemText disableTypography>
        <Typography align="center" variant="body2">
          {score}
        </Typography>
      </ListItemText>
    </SlideLongRippleSwitch>
  );
};

export default GameRoundScore;
