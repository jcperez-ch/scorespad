import noop from 'utils/fn/noop';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ModalConfirm from 'common/modal/Confirm';
import GameStoreContext from 'components/game/context/Store';
import { deleteChampionship } from 'components/game/team/actionCreators';

export default function RoundActionDelete({ round, onSuccess = noop }) {
  const [, dispatch] = useContext(GameStoreContext);
  const { gameKey } = useParams();
  const [t] = useTranslation();

  const handleDelete = () => {
    onSuccess();
    dispatch(deleteChampionship(gameKey, round));
  };

  return (
    <ModalConfirm
      cancelText={t('button.cancel')}
      confirmText={t('button.remove')}
      title={t('title.removeTeam')}
      subtitle={t('messages.confirmRemoveRound')}
      color="primary"
      fab
      size="small"
      variant="contained"
      onConfirm={handleDelete}
    />
  );
}
