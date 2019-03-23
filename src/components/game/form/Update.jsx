import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { noop } from 'lodash';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import NameField from 'common/NameField';
import { flexRow } from 'utils/flexStyles';

import GameStoreContext from 'components/game/context/Store';
import GameActionRemove from '../action/Remove';
import { renameGame } from '../actionCreators';

import useGameValidation from './useValidation';

const GameFormUpdate = ({
  id,
  name,
  onChange = noop,
  onSuccess = noop,
  onClose = noop,
}) => {
  const [, dispatch] = useContext(GameStoreContext);
  const [t] = useTranslation();
  const validation = useGameValidation({ name });
  const { touch, valid, reset } = validation;
  const handleRename = () => {
    touch();
    if (valid) {
      reset();
      dispatch(renameGame(id, name));
      onSuccess();
    }
  };

  return (
    <ListItem component="div">
      <div style={flexRow}>
        <IconButton aria-label={t('button.rename')} onClick={handleRename}>
          <Icon>check</Icon>
        </IconButton>
      </div>
      <NameField
        label={t('placeholder.gameName')}
        onChange={onChange}
        onEnter={handleRename}
        validation={validation}
        value={name}
      />
      <div style={flexRow}>
        <IconButton aria-label={t('button.cancel')} onClick={onClose}>
          <Icon>cancel</Icon>
        </IconButton>
        <GameActionRemove id={id} />
      </div>
    </ListItem>
  );
};

export default GameFormUpdate;
