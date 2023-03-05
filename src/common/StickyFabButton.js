import React from 'react';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/styles';

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
