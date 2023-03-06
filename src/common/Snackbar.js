import React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Txt from 'common/Txt';

function CommonSnackbar({
  children, onClose, onUpdate, ...props
}) {
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
      action={[
      onUpdate && (
        <Button key="undo" variant="outlined" color="primary" size="small" onClick={onUpdate}>
          <Txt id="button.update" />
        </Button>
      ),
        <IconButton
          key="close"
          aria-label="close"
          color="primary"
          onClick={onClose}
          size="large">
          <CloseIcon />
        </IconButton>,
    ]}
      {...props}
      onClose={onClose}
    />
  );
}

export default CommonSnackbar;
