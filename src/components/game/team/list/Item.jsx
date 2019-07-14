import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import SlideLongRippleSwitch from 'common/SlideLongRippleSwitch';
import Flex from 'common/Flex';
import { flexCenterBetween } from 'utils/flexStyles';

import TeamFormUpdate from '../form/Update';
import TeamChampionships from '../Championships';

const TeamListItem = ({
  index, name, championships = [], rounds, round,
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
        <Flex display direction="column">
          <Typography variant="body1">{name}</Typography>
          <TeamChampionships
            index={index}
            championships={championships}
          />
        </Flex>
        {round && (
          <Typography variant="overline">
            {rounds[round].reduce((sum, value) => value + sum, 0)}
          </Typography>
        )}
      </ListItemText>
    </SlideLongRippleSwitch>
  );
};

export default TeamListItem;