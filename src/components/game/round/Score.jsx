import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import SlideLongRippleSwitch from 'common/SlideLongRippleSwitch';

const GameRoundScore = ({ score }) => {
  const [newScore, setNewScore] = useState(null);
  const handleEditMode = () => setNewScore(score);
  const render = (
    <div>
      <strong>{score}</strong>
      <span>Edit!!!!</span>
    </div>
  );
  return (
    <SlideLongRippleSwitch
      on={newScore !== null}
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
