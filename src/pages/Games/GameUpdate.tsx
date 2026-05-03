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
import { renameGame } from '@/store/Actions';
import useNameValidation from '@/utils/validation';

export default function GameUpdate() {
  const { gameKey } = useParams();
  const { name } = useGame();
  const initialNameRef = useRef(name);
  const navigate = useNavigate();
  const [t] = useTranslation();
  const [, dispatch] = useContext(GamesContext);
  const handleClose = () => navigate(`/games/${gameKey}`);
  const [newName, setNewName] = useState(name);
  const { addSnackbar } = useSnackbar();

  const { error, onSubmit } = useNameValidation({
    name: newName,
    errorMessage: 'errors.requiredGameName',
    onSubmit: () => {
      dispatch(renameGame(gameKey!, newName));
      addSnackbar({
        message: t('messages.gameRenamed'),
        onUndo: () => {
          dispatch(renameGame(gameKey!, initialNameRef.current));
        },
      });
      handleClose();
    },
  });

  return (
    <>
      <DialogBody
        title={t('button.renameGame')}
        headline={t('messages.confirmRenameGame')}
        onClose={handleClose}
      >
        <NameField
          autoFocus={true}
          variant="outlined"
          label={t('placeholder.game_name')}
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
          {t('button.renameGame')}
        </Button>
      </DialogActions>
    </>
  );
}
