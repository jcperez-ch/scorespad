import React from 'react';
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function StickyFabButton({ icon, tooltip, ...props }) {
  const { fab } = useStyles();
  return (
    <Tooltip title={tooltip}>
      <Fab className={fab} {...props}>
        <Icon>{icon}</Icon>
      </Fab>
    </Tooltip>
  );
}

export default StickyFabButton;
