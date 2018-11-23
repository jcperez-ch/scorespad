import React, { useState } from 'react';
import { useTranslation } from 'react-i18next/hooks';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import SlideLongRippleSwitch from 'common/SlideLongRippleSwitch';
import CommaList from 'common/CommaList';

import GameFormUpdate from '../form/Update';

const GameListItem = ({
  onClick, id, name, teams,
}) => {
  const [newName, setNewName] = useState(null);
  const [t] = useTranslation();
  const handleEditMode = () => setNewName(name);
  const handleViewMode = () => setNewName(null);
  const handleClick = () => onClick(id);
  const createdAt = new Date(parseInt(id, 36));

  return (
    <SlideLongRippleSwitch
      on={newName !== null}
      setOn={handleEditMode}
      onPress={handleClick}
      render={(
        <GameFormUpdate
          id={id}
          name={newName || ''}
          onChange={setNewName}
          onClose={handleViewMode}
          onSuccess={handleViewMode}
        />
)}
      rippleComponent={ListItem}
      rippleProps={{ button: true }}
    >
      <ListItemText
        disableTypography
        secondary={
          <>
            <Typography variant="body2">
              {t('messages.createdAt', { date: createdAt.toDateString() })}
            </Typography>
            {teams.length > 0 && (
              <Typography variant="overline">
                <CommaList items={teams} keyedBy="name" attribute="name" />
              </Typography>
            )}
          </>
        }
      >
        <Typography variant="body1">{name}</Typography>
      </ListItemText>
    </SlideLongRippleSwitch>
  );
};

export default GameListItem;
