import { noop } from 'lodash';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ModalConfirm from 'common/modal/Confirm';
import GameStoreContext from 'components/game/context/Store';

import { removeTeam } from '../actionCreators';

const TeamActionRemove = ({ index, name, onSuccess = noop }) => {
  const [, dispatch] = useContext(GameStoreContext);
  const { gameKey } = useParams();
  const [t] = useTranslation();
  const handleRemove = () => {
    dispatch(removeTeam(gameKey, index));
    onSuccess();
  };
  return (
    <ModalConfirm
      cancelText={t('button.cancel')}
      confirmText={t('button.remove')}
      title={t('title.removeTeam')}
      subtitle={t('messages.confirmRemoveTeam', { teamName: name })}
      fab
      color="primary"
      size="small"
      onConfirm={handleRemove}
    />
  );
};

export default TeamActionRemove;
