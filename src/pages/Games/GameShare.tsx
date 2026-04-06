import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { QrcodeSVG } from 'react-qrcode-pretty';
import { useNavigate, useParams } from 'react-router';

import { useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

import DialogBody from '@/components/dialog/DialogBody';
import DialogHeadline from '@/components/dialog/DialogHeadline';
import useGame from '@/hooks/useGame';

export default function GameShare() {
  const { gameKey } = useParams();
  const game = useGame();
  const navigate = useNavigate();
  const [t] = useTranslation();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const mountedRef = useRef(false);
  const handleClose = () => {
    void fetch(import.meta.env.VITE_SHARE_GAME_URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ gameKey }),
    });
    navigate(`/games/${gameKey}`);
  };
  const upsertGame = () => {
    void fetch(import.meta.env.VITE_SHARE_GAME_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ gameKey, data: game }),
    });
  };
  useEffect(() => {
    if (!mountedRef.current) {
      upsertGame();
      mountedRef.current = true;
    }
  });
  return (
    <>
      <DialogBody
        title={t('title.shareGame')}
        headline={t('messages.confirmShareGame')}
        onClose={handleClose}
      >
        <center>
          <QrcodeSVG
            value={`${import.meta.env.VITE_PUBLIC_URL}/qr?gameKey=${gameKey}`}
            variant={{
              eyes: 'rounded',
              body: 'shower',
            }}
            color={{
              eyes: '#000',
              body: '#000',
            }}
            colorEffect={{
              eyes: 'shades',
              body: 'shades',
            }}
            padding={16}
            margin={10}
            size={Math.min(
              fullScreen ? window.innerHeight / 2 : window.innerHeight / 3.5,
              window.innerWidth - 84,
            )}
            bgColor="#ddeeff"
            bgRounded
            divider
          />
        </center>
        <DialogHeadline>
          {t('messages.confirmShareGame_step1')}
          <br />
          {t('messages.confirmShareGame_step2')}
          <br />
          {t('messages.confirmShareGame_step3')}
          <br />
          {t('messages.confirmShareGame_step4')}
        </DialogHeadline>
      </DialogBody>
      <DialogActions>
        <Button variant="contained" color="primary" autoFocus onClick={handleClose}>
          {t('button.ok')}
        </Button>
      </DialogActions>
    </>
  );
}
