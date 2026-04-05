import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';

import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

import NameField from '@/components/NameField';
import DialogBody from '@/components/dialog/DialogBody';
import GamesContext from '@/config/GamesContext';
import useGame from '@/hooks/useGame';
import useSnackbar from '@/hooks/useSnackbar';
import { createTeam } from '@/store/Actions';
import useNameValidation from '@/utils/validation';

export default function TeamCreate() {
  const { gameKey } = useParams();
  const { round } = useGame();
  const navigate = useNavigate();
  const [t] = useTranslation();
  const [, dispatch] = useContext(GamesContext);
  const handleClose = () => navigate(`/games/${gameKey}/teams`);
  const [newName, setNewName] = useState('');
  const { addSnackbar } = useSnackbar();

  const { error, onSubmit } = useNameValidation({
    name: newName,
    errorMessage: 'errors.requiredTeamName',
    onSubmit: () => {
      dispatch(createTeam(gameKey!, newName, round!));
      addSnackbar({
        message: t('messages.teamCreated'),
      });
      handleClose();
    },
  });

  return (
    <>
      <DialogBody
        title={t('button.createTeam')}
        headline={t('messages.hintAddTeam')}
        onClose={handleClose}
      >
        <NameField
          autoFocus={true}
          variant="outlined"
          slotProps={{
            input: {
              id: `team-name`,
            },
          }}
          label={t('placeholder.teamName')}
          onChange={setNewName}
          onEnter={onSubmit}
          value={newName}
          error={error}
        />
      </DialogBody>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          {t('button.cancel')}
        </Button>
        <Button autoFocus variant="outlined" onClick={onSubmit}>
          {t('button.createTeam')}
        </Button>
      </DialogActions>
    </>
  );
}
