import React, { useContext } from 'react';
import { noop } from 'lodash';
import { useTranslation } from 'react-i18next/hooks';

import ModalConfirm from 'common/modal/Confirm';

import GameStoreContext from 'components/game/context/Store';
import { removeGame } from '../actionCreators';

const GameActionRemove = ({ id, onSuccess = noop }) => {
  const [, dispatch] = useContext(GameStoreContext);
  const [t] = useTranslation();
  const handleRemove = () => {
    dispatch(removeGame(id));
    onSuccess();
  };
  return (
    <ModalConfirm
      cancelText={t('button.cancel')}
      confirmText={t('button.remove')}
      title={t('title.removeGame')}
      subtitle={t('messages.confirmRemoveGame')}
      onConfirm={handleRemove}
    />
  );
};

export default GameActionRemove;
