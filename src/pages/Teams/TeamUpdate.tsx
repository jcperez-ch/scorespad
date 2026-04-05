import { useContext, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';

import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

import NameField from '@/components/NameField';
import DialogBody from '@/components/dialog/DialogBody';
import GamesContext from '@/config/GamesContext';
import useGame from '@/hooks/useGame';
import useSnackbar from '@/hooks/useSnackbar';
import { renameTeam } from '@/store/Actions';
import useNameValidation from '@/utils/validation';

export default function TeamUpdate() {
  const { gameKey, teamKey } = useParams();
  const { teams } = useGame();
  const team = teams.find((t) => t.key === teamKey);
  const initialNameRef = useRef(team?.name ?? '');
  const navigate = useNavigate();
  const [t] = useTranslation();
  const [, dispatch] = useContext(GamesContext);
  const handleClose = () => navigate(`/games/${gameKey}`);
  const [newName, setNewName] = useState(team?.name ?? '');
  const { addSnackbar } = useSnackbar();

  const { error, onSubmit } = useNameValidation({
    name: newName,
    errorMessage: 'errors.requiredTeamName',
    onSubmit: () => {
      dispatch(renameTeam(gameKey!, teamKey!, newName));
      addSnackbar({
        message: t('messages.teamRenamed'),
        onUndo: () => {
          dispatch(renameTeam(gameKey!, teamKey!, initialNameRef.current));
        },
      });
      handleClose();
    },
  });

  return (
    <>
      <DialogBody
        title={t('button.renameTeam')}
        headline={t('messages.confirmRenameTeam')}
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
          {t('button.renameTeam')}
        </Button>
      </DialogActions>
    </>
  );
}
