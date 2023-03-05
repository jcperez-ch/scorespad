import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
        >
          <CloseIcon />
        </IconButton>,
    ]}
      {...props}
      onClose={onClose}
    />
  );
}

export default CommonSnackbar;
