import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import SlideUp from 'common/SlideUp';
import DialogTitle from 'common/dialog/Title';
import DialogHeadline from 'common/dialog/Headline';
import StyledPrimaryButton from 'common/styled/StyledPrimaryButton';
import NameField from 'common/NameField';
import GameStoreContext from 'components/game/context/Store';
import useValidation from 'utils/validation';

import { createTeam } from '../actionCreators';
import useGame from '../../useGame';

export default function TeamFormCreate() {
  const [name, setName] = useState('');
  const [t] = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [, dispatch] = useContext(GameStoreContext);
  const { gameKey } = useParams();
  const { round } = useGame();

  const handleClose = () => navigate(`/games/${gameKey}`);
  const { error, onSubmit } = useValidation({
    name,
    errorMessage: 'errors.requiredTeamName',
    onSubmit: () => {
      dispatch(createTeam(gameKey, round, name));
      handleClose();
    },
  });

  return (
    <Dialog fullScreen id="team-add-dialog" onClose={handleClose} aria-labelledby="team-add-dialog-title" open TransitionComponent={SlideUp}>
      <DialogTitle id="team-add-dialog-title" onClose={handleClose}>
        {t('title.addTeam')}
      </DialogTitle>
      <DialogContent>
        <DialogHeadline>{searchParams.has('step') ? t('text.addNewTeamForNewGame') : t('text.addNewTeam')}</DialogHeadline>
        <NameField label={t('placeholder.teamName')} onChange={setName} onEnter={onSubmit} error={error} value={name} />
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          {t('button.cancel')}
        </Button>
        <StyledPrimaryButton onClick={() => onSubmit()}>{t('button.add')}</StyledPrimaryButton>
      </DialogActions>
    </Dialog>
  );
}
