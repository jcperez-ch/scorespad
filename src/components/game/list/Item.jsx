import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';
import LongRipple from 'common/LongRipple';
import SlideItem from 'common/SlideItem';

import GameFormUpdate from '../form/Update';

const GameListItem = ({ onClick, id, name }) => {
  const [newName, setNewName] = useState(null);
  const handleEditMode = () => setNewName(name);
  const handleViewMode = () => setNewName(null);
  const handleClick = () => onClick(id);
  const createdAt = new Date(parseInt(id, 36));
  const transitionDuration = 250;

  return (
    <SlideItem>
      <Slide
        in={newName === null}
        direction="right"
        timeout={transitionDuration}
        style={{
          transitionDelay: `${newName === null ? transitionDuration : 0}ms`,
        }}
        unmountOnExit
      >
        <LongRipple
          component={ListItem}
          onLongPress={handleEditMode}
          onClick={handleClick}
          button
        >
          <ListItemText secondary={`Created at ${createdAt.toDateString()}`}>
            {name}
          </ListItemText>
        </LongRipple>
      </Slide>
      <Slide
        in={newName !== null}
        direction="left"
        timeout={transitionDuration}
        style={{
          transitionDelay: `${newName !== null ? transitionDuration : 0}ms`,
        }}
        unmountOnExit
      >
        <GameFormUpdate
          id={id}
          name={newName || ''}
          onChange={setNewName}
          onClose={handleViewMode}
          onSuccess={handleViewMode}
        />
      </Slide>
    </SlideItem>
  );
};

export default GameListItem;
