import React, { useContext, useState } from 'react';
import noop from 'utils/fn/noop';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

import ModalConfirm from 'common/modal/Confirm';

import GameStoreContext from 'components/game/context/Store';
import { removeGame } from '../actionCreators';

export default function GameActionRemove({ id, onSuccess = noop }) {
  const [, dispatch] = useContext(GameStoreContext);
  const [t] = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const handleCancel = () => setIsOpen(false);
  const handleRemove = () => {
    dispatch(removeGame(id));
    onSuccess();
  };
  return (
    <>
      <Button aria-label={t('title.removeGame')} size="small" onClick={() => setIsOpen(true)}>
        <Icon>delete_outline</Icon>
      </Button>
      <ModalConfirm
        cancelText={t('button.cancel')}
        confirmText={t('button.remove')}
        open={isOpen}
        title={t('title.removeGame')}
        subtitle={t('messages.confirmRemoveGame')}
        onConfirm={handleRemove}
        onClose={handleCancel}
      />
    </>
  );
}
