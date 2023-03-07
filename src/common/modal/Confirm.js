import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function ModalConfirm({ children, cancelText, confirmText, open, title, subtitle, onConfirm, onClose }) {
  return (
    <Dialog id="confirm-dialog" aria-labelledby="confirm-title" aria-describedby="confirm-description" open={open} onClose={onClose}>
      <DialogTitle component="h6" id="confirm-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="confirm-description">{subtitle}</DialogContentText>
        {children}
        <DialogActions>
          {cancelText && (
            <Button color="secondary" onClick={onClose}>
              {cancelText}
            </Button>
          )}
          <Button color="primary" autoFocus onClick={onConfirm ?? onClose}>
            {confirmText}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
