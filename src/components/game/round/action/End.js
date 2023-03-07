import React, { useContext, useState } from 'react';
import noop from 'utils/fn/noop';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

import ButtonsWrapper from 'common/ButtonsWrapper';
import ModalConfirm from 'common/modal/Confirm';
import GameStoreContext from 'components/game/context/Store';
import { endRound } from 'components/game/actionCreators';

export default function RoundActionEnd({ gameKey, round, onEnd = noop }) {
  const [open, setOpen] = useState(false);
  const [t] = useTranslation();
  const [, dispatch] = useContext(GameStoreContext);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    dispatch(endRound(gameKey, round));
    setOpen(false);
    onEnd(round);
  };

  return (
    <>
      <ButtonsWrapper>
        <Button color="primary" variant="contained" aria-owns={open ? 'confirm-end-dialog' : undefined} aria-haspopup="true" onClick={() => setOpen(true)}>
          {t('button.endGame')}
        </Button>
      </ButtonsWrapper>
      <ModalConfirm
        open={open}
        cancelText={t('button.cancel')}
        confirmText={t('button.endGame')}
        onClose={handleClose}
        title={t('button.endGame')}
        subtitle={t('messages.confirmEndGame')}
        onConfirm={handleSubmit}
      />
    </>
  );
}
