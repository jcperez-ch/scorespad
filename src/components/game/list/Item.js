import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '@mui/material/Icon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import StyledListItemHeadline from 'common/styled/ListItemHeadline';
import CommaList from 'common/CommaList';

export default function GameListItem({ onClick, id, name, teams }) {
  const [t] = useTranslation();

  const createdAt = new Date(parseInt(id, 36));

  return (
    <ListItemButton alignItems="flex-start" onClick={() => onClick(id)}>
      <ListItemText
        primary={<StyledListItemHeadline>{name}</StyledListItemHeadline>}
        secondary={
          <>
            <Typography variant="body2">{t('messages.createdAt', { date: createdAt.toDateString() })}</Typography>
            <Typography variant="overline">{teams.length > 0 && <CommaList items={teams} keyedBy="name" attribute="name" />}</Typography>
          </>
        }
        secondaryTypographyProps={{ component: 'div' }}
      />
      <ListItemSecondaryAction>
        <Icon>chevron_right</Icon>
      </ListItemSecondaryAction>
    </ListItemButton>
  );
}
