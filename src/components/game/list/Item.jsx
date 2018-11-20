import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next/hooks';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import LongRipple from 'common/LongRipple';

import GameContext from '../Context';
import GameActionRemove from '../action/Remove';
import { renameGame } from '../actionCreators';

const GameListItem = ({ onClick, id, name }) => {
  const [newName, setNewName] = useState(null);
  const [, dispatch] = useContext(GameContext);
  const [t] = useTranslation();
  const handleNameChange = ({ target }) => setNewName(target.value);
  const handleEditMode = () => setNewName(name);
  const handleViewMode = () => setNewName(null);
  const handleRename = () => {
    dispatch(renameGame(id, newName));
    handleViewMode();
  };
  const handleClick = () => onClick(id);

  return newName === null ? (
    <LongRipple
      component={ListItem}
      onLongPress={handleEditMode}
      onClick={handleClick}
      button
    >
      {name}
    </LongRipple>
  ) : (
    <ListItem>
      <div style={{ display: 'flex' }}>
        <IconButton aria-label="Rename" onClick={handleRename}>
          <Icon>check</Icon>
        </IconButton>
      </div>
      <TextField
        fullWidth
        label={t('placeholder.gameName')}
        value={newName}
        onChange={handleNameChange}
        onKeyDown={({ keyCode }) => keyCode === 13 && handleRename()}
      />
      <div style={{ display: 'flex' }}>
        <IconButton aria-label={t('button.cancel')} onClick={handleViewMode}>
          <Icon>cancel</Icon>
        </IconButton>
        <GameActionRemove id={id} />
      </div>
    </ListItem>
  );
};

export default GameListItem;
