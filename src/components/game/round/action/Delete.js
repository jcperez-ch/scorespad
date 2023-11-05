import noop from 'utils/fn/noop';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from '@mui/material/Icon';

import ModalConfirm from 'common/modal/Confirm';
import StyledPrimaryButton from 'common/styled/StyledPrimaryButton';
import GameStoreContext from 'components/game/context/Store';
import { deleteChampionship } from 'components/game/team/actionCreators';

export default function RoundActionDelete({ round, onSuccess = noop }) {
  const [, dispatch] = useContext(GameStoreContext);
  const { gameKey } = useParams();
  const [t] = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const handleCancel = () => setIsOpen(false);

  const handleDelete = () => {
    onSuccess();
    dispatch(deleteChampionship(gameKey, round));
  };

  return (
    <>
      <StyledPrimaryButton startIcon={<Icon>delete_outline</Icon>} onClick={() => setIsOpen(true)}>
        {t('button.remove')}
      </StyledPrimaryButton>
      <ModalConfirm
        cancelText={t('button.cancel')}
        confirmText={t('button.remove')}
        open={isOpen}
        title={t('title.removeRound')}
        subtitle={t('messages.confirmRemoveRound')}
        onClose={handleCancel}
        onConfirm={handleDelete}
      />
    </>
  );
}
