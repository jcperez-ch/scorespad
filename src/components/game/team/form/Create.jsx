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
import NameField from 'common/NameField';
import GameStoreContext from 'components/game/context/Store';
import GameUsedContext from 'components/game/context/Used';

import { createTeam } from '../actionCreators';

import useTeamValidation from './useValidation';

const TeamFormCreate = ({ open, onClose = noop, onSuccess = noop }) => {
  const [name, setName] = useState('');
  const [t] = useTranslation();
  const [, dispatch] = useContext(GameStoreContext);
  const [gameKey, game] = useContext(GameUsedContext);
  const validation = useTeamValidation({ name });
  const { touch, reset, valid } = validation;

  const handleAdd = () => {
    touch();
    if (valid) {
      dispatch(createTeam(gameKey, game.round, name)); // TODO set the game round on creation
      onSuccess();
      reset();
      setName('');
    }
  };

  return (
    <Dialog
      fullScreen
      id="team-add-dialog"
      onClose={onClose}
      aria-labelledby="team-add-dialog-title"
      open={open}
      TransitionComponent={SlideUp}
    >
      <DialogTitle id="team-add-dialog-title" onClose={onClose}>
        {t('button.addTeam')}
      </DialogTitle>
      <DialogContent>
        <DialogHeadline>{t('text.addNewTeam')}</DialogHeadline>
        <NameField
          label={t('placeholder.teamName')}
          onChange={setName}
          onEnter={handleAdd}
          validation={validation}
          value={name}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('button.cancel')}</Button>
        <Button onClick={handleAdd} color="primary" autoFocus>
          {t('button.addTeam')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TeamFormCreate;
