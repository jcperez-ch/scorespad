import noop from 'utils/fn/noop';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

import ModalConfirm from 'common/modal/Confirm';
import GameStoreContext from 'components/game/context/Store';

import { removeTeam } from '../actionCreators';

export default function TeamActionRemove({ index, name, onSuccess = noop }) {
  const [, dispatch] = useContext(GameStoreContext);
  const { gameKey } = useParams();
  const [t] = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const handleCancel = () => setIsOpen(false);
  const handleRemove = () => {
    dispatch(removeTeam(gameKey, index));
    onSuccess();
  };
  return (
    <>
      <Button startIcon={<Icon>delete_outline</Icon>} size="small" onClick={() => setIsOpen(true)}>
        {t('button.remove')}
      </Button>
      <ModalConfirm
        cancelText={t('button.cancel')}
        confirmText={t('button.remove')}
        open={isOpen}
        title={t('title.removeTeam')}
        subtitle={t('messages.confirmRemoveTeam', { teamName: name })}
        onConfirm={handleRemove}
        onClose={handleCancel}
      />
    </>
  );
}
