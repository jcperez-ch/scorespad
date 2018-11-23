import React, { useContext } from 'react';
import { noop } from 'lodash';
import { useTranslation } from 'react-i18next/hooks';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import GameStoreContext from 'components/game/context/Store';
import GameUsedContext from 'components/game/context/Used';
import { removeTeam } from '../actionCreators';

const TeamActionRemove = ({ index, onSuccess = noop }) => {
  const [, dispatch] = useContext(GameStoreContext);
  const [gameKey] = useContext(GameUsedContext);
  const [t] = useTranslation();
  const handleRemove = () => {
    dispatch(removeTeam(gameKey, index));
    onSuccess();
  };
  return (
    <IconButton aria-label={t('button.remove')} onClick={handleRemove}>
      <Icon>delete_outline</Icon>
    </IconButton>
  );
};

export default TeamActionRemove;
