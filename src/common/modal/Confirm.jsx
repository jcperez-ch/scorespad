import React, { useState } from 'react';
import { noop } from 'lodash';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

import ModalActions from './Actions';
import ModalContent from './Content';

const ModalConfirm = ({
  cancelText,
  confirmText,
  title,
  subtitle,
  icon = 'delete_outline',
  onConfirm = noop,
}) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <>
      <IconButton
        aria-label={confirmText}
        aria-owns={open ? 'confirm-dialog' : undefined}
        aria-haspopup="true"
        onClick={toggleOpen}
      >
        <Icon>{icon}</Icon>
      </IconButton>
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
          <ModalActions>
            <Button onClick={toggleOpen}>{cancelText}</Button>
            <Button color="primary" autoFocus onClick={onConfirm}>
              {confirmText}
            </Button>
          </ModalActions>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalConfirm;
