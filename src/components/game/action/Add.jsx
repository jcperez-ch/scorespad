import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next/hooks';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

import SlideUp from 'common/SlideUp';
import DialogTitle from 'common/Dialog/Title';
import DialogHeadline from 'common/Dialog/Headline';

import { createGame } from '../actionCreators';
import GameContext from '../Context';

const GameActionAdd = () => {
  const [visible, setVisible] = useState(false);
  const [newName, setNewName] = useState('');
  const [t] = useTranslation();
  const [, dispatch] = useContext(GameContext);

  const handleNameChange = ({ target }) => setNewName(target.value);
  const handleAdd = () => {
    dispatch(createGame(Date.now().toString(36), newName));
    setVisible(false);
  };
  const toggleVisible = () => setVisible(!visible);
  return (
    <>
      <Tooltip title={t('button.createGame')}>
        <IconButton
          color="inherit"
          aria-owns={visible ? 'game-add-dialog' : undefined}
          aria-haspopup="true"
          onClick={toggleVisible}
        >
          <Icon>add</Icon>
        </IconButton>
      </Tooltip>
      <Dialog
        fullScreen
        id="game-add-dialog"
        onClose={toggleVisible}
        aria-labelledby="game-add-dialog-title"
        open={visible}
        TransitionComponent={SlideUp}
      >
        <DialogTitle id="game-add-dialog-title" onClose={toggleVisible}>
          {t('button.createGame')}
        </DialogTitle>
        <DialogContent>
          <DialogHeadline>{t('text.selectNewGame')}</DialogHeadline>
          <TextField
            fullWidth
            label={t('placeholder.gameName')}
            value={newName}
            onChange={handleNameChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleVisible}>{t('button.cancel')}</Button>
          <Button onClick={handleAdd} color="primary" autoFocus>
            {t('button.createGame')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default GameActionAdd;
