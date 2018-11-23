import React, { useContext } from 'react';
import { noop } from 'lodash';
import { useTranslation } from 'react-i18next/hooks';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

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
    <IconButton aria-label={t('button.remove')} onClick={handleRemove}>
      <Icon>delete_outline</Icon>
    </IconButton>
  );
};

export default GameActionRemove;