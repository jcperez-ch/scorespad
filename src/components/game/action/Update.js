import React, { useCallback, useContext, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import NameField from 'common/NameField';
import SlideUp from 'common/SlideUp';
import DialogTitle from 'common/dialog/Title';
import DialogHeadline from 'common/dialog/Headline';
import GameStoreContext from 'components/game/context/Store';
import StyledPrimaryButton from 'common/styled/StyledPrimaryButton';
import useSnackbar from 'common/useSnackbar';
import { renameGame } from 'components/game/actionCreators';
import useGame from 'components/game/useGame';
import useValidation from 'utils/validation';

export default function GameActionUpdate() {
  const { gameKey } = useParams();
  const { name } = useGame();
  const initialNameRef = useRef(name);
  const [newName, setNewName] = useState(name);
  const [, dispatch] = useContext(GameStoreContext);
  const [open, setOpen] = useState(true);
  const [t] = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { snackbar: gameUpdatedSnackbar, onShow: onShowSnackbar } = useSnackbar({
    onUndo: useCallback(() => {
      dispatch(renameGame(gameKey, initialNameRef.current));
    }, [gameKey]),
  });
  const handleClose = () => {
    setOpen(false);
  };
  const handleExited = () => {
    navigate(location.state?.from ?? '/');
  };
  const { error, onSubmit } = useValidation({
    name: newName,
    errorMessage: 'errors.requiredGameName',
    onSubmit: () => {
      dispatch(renameGame(gameKey, newName));
      handleExited();
      onShowSnackbar(t('messages.gameRenamed'));
    },
  });
  return (
    <Dialog
      fullScreen
      id="game-share-dialog"
      aria-labelledby="game-share-dialog-title"
      open={open}
      TransitionComponent={SlideUp}
      onClose={handleClose}
      TransitionProps={{
        onExited: handleExited,
      }}
    >
      <DialogTitle id="game-share-dialog-title" onClose={handleClose}>
        {t('button.renameGame')}
      </DialogTitle>
      <DialogContent>
        <DialogHeadline>{t('messages.confirmRenameTeam')}</DialogHeadline>
        <NameField variant="outlined" label={t('placeholder.game_name')} onChange={setNewName} onEnter={onSubmit} error={error} value={newName} />
        {gameUpdatedSnackbar}
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          {t('button.cancel')}
        </Button>
        <StyledPrimaryButton onClick={onSubmit}>{t('button.confirm')}</StyledPrimaryButton>
      </DialogActions>
    </Dialog>
  );
}
