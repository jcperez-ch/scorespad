import React from 'react';
import { useTranslation } from 'react-i18next/hooks';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

const GameEmptyList = () => {
  const [t] = useTranslation();
  return (
    <ListItem>
      <ListItemIcon>
        <Icon>info</Icon>
      </ListItemIcon>
      <ListItemText inset primary={t('text.noGames')} />
    </ListItem>
  );
};

export default GameEmptyList;
