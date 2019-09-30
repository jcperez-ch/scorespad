import React, { useState } from 'react'
import { noop } from 'lodash'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'

import ButtonExtended from '../button/Extended'
import ModalActions from './Actions'
import ModalContent from './Content'

const ModalConfirm = ({
  cancelText,
  confirmText,
  title,
  subtitle,
  icon = 'delete_outline',
  fab = false,
  onConfirm = noop,
  ...props
}) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!open)
  return (
    <>
      {fab ? (
        <ButtonExtended {...props} icon={icon} label={confirmText} onClick={toggleOpen} />
      ) : (
        <IconButton
          aria-label={confirmText}
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
          <ModalActions>
            <Button onClick={toggleOpen}>{cancelText}</Button>
            <Button color="primary" autoFocus onClick={onConfirm}>
              {confirmText}
            </Button>
          </ModalActions>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalConfirm
