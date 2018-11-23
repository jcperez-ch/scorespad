import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import SlideLongRippleSwitch from 'common/SlideLongRippleSwitch';

import TeamFormUpdate from '../form/Update';

const GameListItem = ({ index, name }) => {
  const [newName, setNewName] = useState(null);
  const handleEditMode = () => setNewName(name);
  const handleViewMode = () => setNewName(null);

  return (
    <SlideLongRippleSwitch
      on={newName !== null}
      setOn={handleEditMode}
      render={(
        <TeamFormUpdate
          index={index}
          name={newName || ''}
          onChange={setNewName}
          onClose={handleViewMode}
          onSuccess={handleViewMode}
        />
)}
      rippleComponent={ListItem}
      rippleProps={{ button: true }}
    >
      <ListItemText disableTypography>
        <Typography variant="body1">{name}</Typography>
      </ListItemText>
    </SlideLongRippleSwitch>
  );
};

export default GameListItem;
