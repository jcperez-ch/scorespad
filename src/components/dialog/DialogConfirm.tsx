import { Activity } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type Props = {
  children?: React.ReactNode;
  cancelText?: string;
  confirmText: string;
  open: boolean;
  title: string;
  subtitle?: string;
  onConfirm?: () => void;
  onClose: () => void;
};

export default function DialogConfirm({
  children,
  cancelText,
  confirmText,
  open,
  title,
  subtitle,
  onConfirm,
  onClose,
}: Props) {
  return (
    <Dialog
      id="confirm-dialog"
      aria-labelledby="confirm-title"
      aria-describedby="confirm-description"
      open={open}
      onClose={onClose}
    >
      <DialogTitle component="h6" id="confirm-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="confirm-description">{subtitle}</DialogContentText>
        {children}
        <DialogActions>
          <Activity mode={cancelText != null ? 'visible' : 'hidden'}>
            <Button color="secondary" onClick={onClose}>
              {cancelText}
            </Button>
          </Activity>
          <Button variant="outlined" color="warning" autoFocus onClick={onConfirm ?? onClose}>
            {confirmText}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
