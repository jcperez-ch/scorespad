import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import LongRipple from 'common/LongRipple';

import GameFormUpdate from '../form/Update';

const GameListItem = ({ onClick, id, name }) => {
  const [newName, setNewName] = useState(null);
  const handleNameChange = ({ target }) => setNewName(target.value);
  const handleEditMode = () => setNewName(name);
  const handleViewMode = () => setNewName(null);
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
    <GameFormUpdate
      id={id}
      name={newName}
      onChange={handleNameChange}
      onClose={handleViewMode}
      onSuccess={handleViewMode}
    />
  );
};

export default GameListItem;
