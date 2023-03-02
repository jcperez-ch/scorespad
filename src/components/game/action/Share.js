import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import QRCode from 'qrcode';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import SlideUp from 'common/SlideUp';
import DialogTitle from 'common/dialog/Title';
import DialogHeadline from 'common/dialog/Headline';
import GameStoreContext from 'components/game/context/Store';

export default function GameActionShare() {
  const { gameKey } = useParams();
  const [games] = useContext(GameStoreContext);
  const [dataUrl, setDataUrl] = useState();
  const [open, setOpen] = useState(true);
  const [t] = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const matchesLarge = useMediaQuery('(min-width: 481px)');
  const handleClose = () => {
    setOpen(false);
  };
  const handleExited = () => {
    navigate(location.state.from || '/');
  };

  const handleGenerate = useCallback(async (code) => {
    setDataUrl(await QRCode.toDataURL(document.getElementById('qrcode'), code, { width: 290 }));
  }, []);

  useEffect(() => {
    const game = games[gameKey];
    if (game) {
      handleGenerate(JSON.stringify({ id: gameKey, ...game }));
    }
  }, [gameKey, games, handleGenerate]);
  return (
    <Dialog
      fullScreen
      id="game-share-dialog"
      aria-labelledby="game-share-dialog-title"
      open={open}
      TransitionComponent={SlideUp}
      onClose={handleClose}
      onExited={handleExited}
    >
      <DialogTitle id="game-share-dialog-title" onClose={handleClose}>
        {t('title.shareGame')}
      </DialogTitle>
      <DialogContent>
        <DialogHeadline>{t('messages.confirmShareGame')}</DialogHeadline>
        {useMemo(
          () => (
            <div style={matchesLarge ? {} : { textAlign: 'center' }}>{dataUrl && <img src={dataUrl} alt="qr code" />}</div>
          ),
          [dataUrl, matchesLarge],
        )}
        <DialogHeadline>
          {t('messages.confirmShareGame_step1')}
          <br />
          {t('messages.confirmShareGame_step2')}
          <br />
          {t('messages.confirmShareGame_step3')}
          <br />
          {t('messages.confirmShareGame_step4')}
        </DialogHeadline>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" autoFocus onClick={handleClose}>
          {t('button.ok')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
