import React, { useContext, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Link from '@mui/material/Link';

import NameField from 'common/NameField';
import DialogHeadline from 'common/dialog/Headline';
import DialogTitle from 'common/dialog/Title';
import StyledButton from 'common/styled/StyledPrimaryButton';
import GameStoreContext from 'components/game/context/Store';
import { createGame } from 'components/game/actionCreators';
import useValidation from 'utils/validation';

export default function GameFormByName() {
  const [newName, setNewName] = useState('');
  const navigate = useNavigate();
  const [t] = useTranslation();
  const [, dispatch] = useContext(GameStoreContext);
  const { error, onSubmit } = useValidation({
    name: newName,
    errorMessage: 'errors.requiredGameName',
    onSubmit: () => {
      const id = Date.now().toString(36);
      dispatch(createGame(id, newName));
      navigate(`/games/${id}/team?step`);
    },
  });
  const handleClose = () => navigate('/');

  return (
    <>
      <DialogTitle id="game-add-dialog-title" onClose={handleClose}>
        {t('game_title')}
      </DialogTitle>
      <DialogContent>
        <DialogHeadline>{t('text.addNewGame')}</DialogHeadline>
        <NameField variant="outlined" label={t('placeholder.game_name')} onChange={setNewName} onEnter={onSubmit} error={error} value={newName} />
        <DialogHeadline>
          <Trans components={{ a: <Link href="./scan" /> }} i18nKey="text.addNewGameByScan" values={{ here: t('button.here') }} />
        </DialogHeadline>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          {t('button.cancel')}
        </Button>
        <StyledButton variant="contained" color="primary" autoFocus onClick={onSubmit}>
          {t('button.createGame')}
        </StyledButton>
      </DialogActions>
    </>
  );
}
