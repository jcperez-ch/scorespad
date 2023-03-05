import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

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
  return (
    <>
      {fab ? (
        <ButtonExtended {...props} icon={icon} label={buttonText} onClick={toggleOpen} />
      ) : (
        <IconButton
          {...props}
          aria-label={buttonText}
          aria-owns={open ? 'confirm-dialog' : undefined}
          aria-haspopup="true"
          onClick={toggleOpen}
        >
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
    </>
  );
}

export default ModalConfirm;
