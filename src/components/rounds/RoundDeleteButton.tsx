import { use, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';

import GamesContext from '@/config/GamesContext';
import { deletePastRound } from '@/store/Actions';

import DialogConfirm from '../dialog/DialogConfirm';

export default function RoundDeleteButton() {
  const [t] = useTranslation();
  const [, dispatch] = use(GamesContext);
  const navigate = useNavigate();
  const { gameKey, roundKey } = useParams();
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<DeleteForeverIcon />}
        onClick={() => setConfirmDeleteOpen(true)}
      >
        {t('button.delete')}
      </Button>
      <DialogConfirm
        open={confirmDeleteOpen}
        cancelText={t('button.cancel')}
        confirmText={t('button.delete')}
        onClose={() => setConfirmDeleteOpen(false)}
        title={t('button.deleteGame')}
        subtitle={t('messages.confirmRemoveGame')}
        onConfirm={() => {
          setConfirmDeleteOpen(false);
          navigate(`/games/${gameKey}/history`);
          dispatch(deletePastRound(gameKey!, roundKey!));
        }}
      />
    </>
  );
}
