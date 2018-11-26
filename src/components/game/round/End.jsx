import React, { useContext, useState } from 'react';
import { noop } from 'lodash';
import { useTranslation } from 'react-i18next/hooks';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

import ModalActions from 'common/modal/Actions';
import ModalContent from 'common/modal/Content';
import StickyFabButton from 'common/StickyFabButton';
import GameStoreContext from 'components/game/context/Store';
import { endRound } from 'components/game/actionCreators';

const RoundEnd = ({ gameKey, round, onEnd = noop }) => {
  const [open, setOpen] = useState(false);
  const [t] = useTranslation();
  const [, dispatch] = useContext(GameStoreContext);
  const toggleOpen = () => setOpen(!open);
  const handleSubmit = () => {
    dispatch(endRound(gameKey, round));
    setOpen(false);
    onEnd(round);
  };
  return (
    <>
      <Tooltip title={t('button.endGame')}>
        <StickyFabButton
          color="primary"
          position="center"
          aria-owns={open ? 'confirm-end-dialog' : undefined}
          aria-haspopup="true"
          icon="done_outline"
          onClick={toggleOpen}
        />
      </Tooltip>
      <Modal
        id="confirm-end-dialog"
        aria-labelledby="confirm-end-title"
        aria-describedby="confirm-end-description"
        open={open}
        onClose={toggleOpen}
      >
        <ModalContent>
          <Typography variant="h6" id="confirm-end-title">
            {t('button.endGame')}
          </Typography>
          <Typography variant="subtitle1" id="confirm-end-description">
            {t('messages.confirmEndGame')}
          </Typography>
          <ModalActions>
            <Button onClick={toggleOpen}>{t('button.cancel')}</Button>
            <Button color="primary" autoFocus onClick={handleSubmit}>
              {t('button.endGame')}
            </Button>
          </ModalActions>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RoundEnd;
