import React from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const CommonSnackbar = ({ onClose, ...props }) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    ContentProps={{
      'aria-describedby': 'message-id',
    }}
    message={<span id="message-id">There is a new version, want to update?</span>}
    action={[
      <Button key="undo" variant="outlined" color="primary" size="small" onClick={onClose}>
        UPDATE
      </Button>,
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
)

export default CommonSnackbar
