import React, { useContext, useState } from 'react';
import { noop } from 'lodash';
import { useTranslation } from 'react-i18next/hooks';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import TextField from '@material-ui/core/TextField';

import SlideUp from 'common/SlideUp';
import DialogTitle from 'common/Dialog/Title';
import DialogHeadline from 'common/Dialog/Headline';
import { handlers } from 'utils';

import { createGame } from '../actionCreators';
import GameContext from '../Context';

const GameFormCreate = ({ open, onClose = noop, onSuccess = noop }) => {
  const [newName, setNewName] = useState('');
  const [t] = useTranslation();
  const [, dispatch] = useContext(GameContext);

  const handleNameChange = ({ target }) => setNewName(target.value);
  const handleAdd = () => {
    const id = Date.now().toString(36);
    dispatch(createGame(id, newName));
    onSuccess(id);
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
        <TextField
          fullWidth
          label={t('placeholder.gameName')}
          value={newName}
          onChange={handleNameChange}
          onKeyDown={handlers.onEnter(handleAdd)}
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
