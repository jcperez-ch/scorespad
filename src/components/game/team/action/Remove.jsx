import React, { useContext } from 'react';
import { noop } from 'lodash';
import { useTranslation } from 'react-i18next';

import ModalConfirm from 'common/modal/Confirm';
import GameStoreContext from 'components/game/context/Store';
import GameUsedContext from 'components/game/context/Used';
import { removeTeam } from '../actionCreators';

const TeamActionRemove = ({ index, name, onSuccess = noop }) => {
  const [, dispatch] = useContext(GameStoreContext);
  const [gameKey] = useContext(GameUsedContext);
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
      onConfirm={handleRemove}
    />
  );
};

export default TeamActionRemove;
