import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import SlideLongRippleSwitch from 'common/SlideLongRippleSwitch';
import useLongRipple from 'common/useLongRipple';
import Flex from 'common/Flex';
import { flexCenterBetween } from 'utils/flexStyles';

import TeamFormUpdate from '../form/Update';
import TeamChampionship from '../Championship';
import TeamGroupedChampionships from '../championship/GroupedChampionships';

function TeamListItem({ index, name, championships = [], rounds, round, onClickChampionship }) {
  const [newName, setNewName] = useState(null);
  const handleEditMode = () => setNewName(name);
  const handleViewMode = () => setNewName(null);
  const rippleProps = useLongRipple({ onLongPress: handleEditMode });

  return (
    <SlideLongRippleSwitch active={newName === null ? 1 : 0}>
      <TeamFormUpdate index={index} name={newName || ''} onChange={setNewName} onClose={handleViewMode} onSuccess={handleViewMode} />
      <ListItem button {...rippleProps}>
        <ListItemText disableTypography style={flexCenterBetween}>
          <div>
            <Typography variant="body1">{name}</Typography>
            <Flex display wrap="wrap">
              {championships.length > 6
                ? <TeamGroupedChampionships index={index} count={championships.length} />
                : championships.map((championship) => (
                  <TeamChampionship key={championship} championship={championship} onClick={onClickChampionship} />
                ))}
            </Flex>
          </div>
          {round && <Typography variant="overline">{rounds[round].reduce((sum, value) => value + sum, 0)}</Typography>}
        </ListItemText>
      </ListItem>
    </SlideLongRippleSwitch>
  );
}

export default TeamListItem;
