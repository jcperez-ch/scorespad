import React, { useMemo } from 'react';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function CommonSnackbar({ children, onClose, action, ...props }) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={children}
      action={useMemo(
        () => [
          ...(action ?? []),
          <IconButton key="close" aria-label="close" color="primary" onClick={onClose} size="large">
            <CloseIcon />
          </IconButton>,
        ],
        [action],
      )}
      {...props}
      onClose={onClose}
    />
  );
}

export default CommonSnackbar;
