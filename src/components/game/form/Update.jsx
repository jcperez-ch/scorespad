import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next/hooks';
import { noop } from 'lodash';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';

import { handlers } from 'utils';

import GameContext from '../Context';
import GameActionRemove from '../action/Remove';
import { renameGame } from '../actionCreators';

const GameFormUpdate = ({
  id,
  name,
  onChange = noop,
  onSuccess = noop,
  onClose = noop,
}) => {
  const [, dispatch] = useContext(GameContext);
  const [t] = useTranslation();
  const handleRename = () => {
    dispatch(renameGame(id, name));
    onSuccess();
  };

  return (
    <ListItem>
      <div style={{ display: 'flex' }}>
        <IconButton aria-label="Rename" onClick={handleRename}>
          <Icon>check</Icon>
        </IconButton>
      </div>
      <TextField
        fullWidth
        label={t('placeholder.gameName')}
        value={name}
        onChange={onChange}
        onKeyDown={handlers.onEnter(handleRename)}
      />
      <div style={{ display: 'flex' }}>
        <IconButton aria-label={t('button.cancel')} onClick={onClose}>
          <Icon>cancel</Icon>
        </IconButton>
        <GameActionRemove id={id} />
      </div>
    </ListItem>
  );
};

export default GameFormUpdate;
