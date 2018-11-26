import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import SlideLongRippleSwitch from 'common/SlideLongRippleSwitch';
import { flexCenterBetween } from 'utils/flexStyles';

import TeamFormUpdate from '../form/Update';

const GameListItem = ({
  index, name, rounds, round,
}) => {
  const [newName, setNewName] = useState(null);
  const handleEditMode = () => setNewName(name);
  const handleViewMode = () => setNewName(null);
  const render = (
    <TeamFormUpdate
      index={index}
      name={newName || ''}
      onChange={setNewName}
      onClose={handleViewMode}
      onSuccess={handleViewMode}
    />
  );

  return (
    <SlideLongRippleSwitch
      on={newName !== null}
      setOn={handleEditMode}
      render={render}
      rippleComponent={ListItem}
      rippleProps={{ button: true }}
    >
      <ListItemText disableTypography style={flexCenterBetween}>
        <Typography variant="body1">{name}</Typography>
        {round && (
          <Typography variant="overline">
            {rounds[round].reduce((sum, value) => value + sum, 0)}
          </Typography>
        )}
      </ListItemText>
    </SlideLongRippleSwitch>
  );
};

export default GameListItem;
