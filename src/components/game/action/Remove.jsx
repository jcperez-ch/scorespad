import React, { useContext } from 'react';
import { noop } from 'lodash';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import GameContext from '../Context';
import { removeGame } from '../actionCreators';

const GameActionRemove = ({ id, onSuccess = noop }) => {
  const [, dispatch] = useContext(GameContext);
  const handleRemove = () => {
    dispatch(removeGame(id));
    onSuccess();
  };
  return (
    <IconButton aria-label="Remove" onClick={handleRemove}>
      <Icon>delete_outline</Icon>
    </IconButton>
  );
};

export default GameActionRemove;
