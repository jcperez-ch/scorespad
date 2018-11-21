import React, { useContext, useState } from 'react';
import { noop } from 'lodash';
import { useTranslation } from 'react-i18next/hooks';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import SlideUp from 'common/SlideUp';
import DialogTitle from 'common/dialog/Title';
import DialogHeadline from 'common/dialog/Headline';

import { createGame } from '../actionCreators';
import GameContext from '../Context';

import useGameValidation from './useValidation';
import GameFormNameField from './NameField';

const GameFormCreate = ({ open, onClose = noop, onSuccess = noop }) => {
  const [newName, setNewName] = useState('');
  const [t] = useTranslation();
  const [, dispatch] = useContext(GameContext);
  const validation = useGameValidation({
    name: newName,
  });
  const { touch, valid } = validation;

  const handleAdd = () => {
    touch();
    if (valid) {
      const id = Date.now().toString(36);
      dispatch(createGame(id, newName));
      onSuccess(id);
    }
  };

  return (
    <Dialog
      fullScreen
      id="game-add-dialog"
      onClose={onClose}
      aria-labelledby="game-add-dialog-title"
      open={open}
      TransitionComponent={SlideUp}
    >
      <DialogTitle id="game-add-dialog-title" onClose={onClose}>
        {t('button.createGame')}
      </DialogTitle>
      <DialogContent>
        <DialogHeadline>{t('text.selectNewGame')}</DialogHeadline>
        <GameFormNameField
          label={t('placeholder.gameName')}
          onChange={setNewName}
          onEnter={handleAdd}
          validation={validation}
          value={newName}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('button.cancel')}</Button>
        <Button onClick={handleAdd} color="primary" autoFocus>
          {t('button.createGame')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GameFormCreate;
