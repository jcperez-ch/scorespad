import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';

export default function TeamChampionshipsListItem({ roundKey }) {
  const { gameKey } = useParams();
  const navigate = useNavigate();
  const [t] = useTranslation();
  const goToChampionship = () => navigate(`/games/${gameKey}/rounds/${roundKey}`);
  const playedAt = new Date(parseInt(roundKey, 36));

  return (
    <ListItem button onClick={goToChampionship}>
      <ListItemIcon>
        <Icon color="secondary">star</Icon>
      </ListItemIcon>
      <ListItemText disableTypography>
        <Typography color="secondary" variant="overline">
          {t('messages.playedAt', { date: playedAt.toDateString(), time: playedAt.toLocaleTimeString() })}
        </Typography>
      </ListItemText>
    </ListItem>
  );
}
