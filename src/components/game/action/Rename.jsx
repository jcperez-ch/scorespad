import React, { useContext } from 'react';
import { noop } from 'lodash';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import GameContext from '../Context';
import { renameGame } from '../actionCreators';

const GameActionRename = ({ id, name, onSuccess = noop }) => {
  const [, dispatch] = useContext(GameContext);
  const handleRemove = () => {
    dispatch(renameGame(id, name));
    onSuccess();
  };
  return (
    <IconButton aria-label="Rename" onClick={handleRemove}>
      <Icon>check</Icon>
    </IconButton>
  );
};

export default GameActionRename;
