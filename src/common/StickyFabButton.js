import React from 'react';
import Icon from '@mui/material/Icon';
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from '@mui/styles';

import StyledFab from 'common/styled/StyledFab';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    '&:hover': {
      color: 'var(--button-text-color)',
    },
  },
}));

function StickyFabButton({ icon, tooltip, ...props }) {
  const { fab } = useStyles();
  return (
    <Tooltip title={tooltip}>
      <StyledFab className={fab} {...props}>
        <Icon>{icon}</Icon>
      </StyledFab>
    </Tooltip>
  );
}

export default StickyFabButton;
