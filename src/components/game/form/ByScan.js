import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';

import CommaList from 'common/CommaList';
import CommonQrScan from 'common/qr/Scan';
import DialogTitle from 'common/dialog/Title';
import WarnPlaceholder from 'common/WarnPlaceholder';
import StyledPrimaryButton from 'common/styled/StyledPrimaryButton';
import GameStoreContext from 'components/game/context/Store';
import { importGame } from 'components/game/actionCreators';

export default function GameFormByScan() {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const [, dispatch] = useContext(GameStoreContext);
  const [code, setCode] = useState(null);
  const handleScan = useCallback((newCode) => {
    setCode(newCode);
  }, []);
  const handleClose = () => navigate('/');
  const handleAdd = () => {
    const { id, ...newGame } = code;
    dispatch(importGame(id, newGame));
    navigate(`/games/${id}`);
  };
  const createdAt = useMemo(() => {
    if (code) {
      const date = new Date(parseInt(code.id, 36));
      return date.toDateString();
    }
    return '';
  }, [code]);
  return (
    <>
      <DialogTitle id="game-share-dialog-title" onClose={handleClose}>
        {t('game_scan_title')}
      </DialogTitle>
      <DialogContent>
        <CommonQrScan
          fallbackCode={<WarnPlaceholder icon="mobile_off" message={t('game_scan_wrong_code')} />}
          fallbackMedia={<WarnPlaceholder icon="videocam_off" message={t('game_scan_no_camera')} />}
          tryAgainButtonLabel={t('button.tryAgain')}
          giveUpButtonLabel={t('button.back')}
          onCode={handleScan}
          onClose={handleClose}
        />
        {code && (
          <>
            <CardHeader title={code.name} subheader={t('messages.createdAt', { date: createdAt })} />
            {code.teams.length > 0 && (
              <Typography variant="overline">
                <CommaList items={code.teams} keyedBy="name" attribute="name" />
              </Typography>
            )}
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={() => navigate('/game')}>
          {t('button.back')}
        </Button>
        {code && (
          <StyledPrimaryButton autoFocus onClick={handleAdd}>
            {t('button.confirm')}
          </StyledPrimaryButton>
        )}
      </DialogActions>
    </>
  );
}
