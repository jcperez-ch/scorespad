import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router';

import HourglassTopIcon from '@mui/icons-material/HourglassTop';

import PageNullState from '@/components/PageNullState';
import DialogBody from '@/components/dialog/DialogBody';
import { importGame } from '@/store/Actions';
import { Game } from '@/store/State';

export default function GameFormByQR() {
  const [t] = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleClose = () => navigate('/');
  const mountedRef = useRef(false);
  const scanGame = async (gameKey: string) => {
    const gameFetched = await fetch(`${import.meta.env.VITE_SHARE_GAME_URL}?gameKey=${gameKey}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const gameJson = await gameFetched.json();
    if ((gameJson as Game) != null) {
      importGame(gameKey, gameJson as Game);
      navigate(`/games/${gameKey}`);
    }
  };
  useEffect(() => {
    const gameKey = searchParams.get('gameKey');
    if (!mountedRef.current && gameKey != null) {
      void scanGame(gameKey);
      mountedRef.current = true;
    }
  });
  return (
    <>
      <DialogBody title={t('game_scan_title')} onClose={handleClose}>
        <PageNullState message={t('messages.loading')} icon={<HourglassTopIcon />} />
      </DialogBody>
    </>
  );
}
