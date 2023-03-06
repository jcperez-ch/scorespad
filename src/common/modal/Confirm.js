import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import ButtonExtended from '../button/Extended';
import ModalActions from './Actions';
import ModalContent from './Content';

function ModalConfirm({
  children,
  cancelText,
  confirmText,
  buttonText = confirmText,
  title,
  subtitle,
  icon = 'delete_outline',
  fab = false,
  onConfirm,
  ...props
}) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  return <>
    {fab ? (
      <ButtonExtended {...props} icon={icon} label={buttonText} onClick={toggleOpen} />
    ) : (
      <IconButton
        {...props}
        aria-label={buttonText}
        aria-owns={open ? 'confirm-dialog' : undefined}
        aria-haspopup="true"
        onClick={toggleOpen}
        size="large">
        <Icon>{icon}</Icon>
      </IconButton>
    )}
    <Modal
      id="confirm-dialog"
      aria-labelledby="confirm-title"
      aria-describedby="confirm-description"
      open={open}
      onClose={toggleOpen}
    >
      <ModalContent>
        <Typography variant="h6" id="confirm-title">
          {title}
        </Typography>
        <Typography variant="subtitle1" id="confirm-description">
          {subtitle}
        </Typography>
        {children}
        <ModalActions>
          {cancelText && <Button variant="contained" onClick={toggleOpen}>{cancelText}</Button>}
          <Button variant="contained" color="primary" autoFocus onClick={onConfirm || handleClose}>
            {confirmText}
          </Button>
        </ModalActions>
      </ModalContent>
    </Modal>
  </>;
}

export default ModalConfirm;
