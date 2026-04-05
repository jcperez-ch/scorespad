import { use, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';

import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import GamesContext from '@/config/GamesContext';
import useGame from '@/hooks/useGame';
import { endRound } from '@/store/Actions';
import { Team } from '@/store/State';

import DialogConfirm from '../dialog/DialogConfirm';

export default function RoundEndButton() {
  const [t] = useTranslation();
  const { gameKey, roundKey } = useParams();
  const game = useGame();
  const navigate = useNavigate();
  const [confirmEndRound, setConfirmEndRound] = useState(false);
  const [, dispatch] = use(GamesContext);
  const { round, teams, gameType } = game;
  const lowScoreWins = gameType === 'mexican_train' || gameType === 'continental';
  const winnerTeam = useMemo(
    () =>
      round == null
        ? null
        : teams.toSorted((a: Team, b: Team) => {
            const aTotal = a.rounds[round!].reduce((sum, score) => sum + score, 0);
            const bTotal = b.rounds[round!].reduce((sum, score) => sum + score, 0);
            return lowScoreWins ? aTotal - bTotal : bTotal - aTotal;
          })[0],
    [teams, round, lowScoreWins],
  );

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<SaveIcon />}
        onClick={() => {
          setConfirmEndRound(true);
        }}
      >
        {t('button.endRound')}
      </Button>
      <DialogConfirm
        open={confirmEndRound}
        cancelText={t('button.cancel')}
        confirmText={t('button.yes')}
        onClose={() => setConfirmEndRound(false)}
        title={t('button.endRound')}
        onConfirm={() => {
          navigate(`/games/${gameKey}`);
          dispatch(endRound(gameKey!, roundKey!));
        }}
      >
        {winnerTeam != null && (
          <Typography variant="subtitle2">
            {t('messages.endRoundDisclosure', {
              winnerTeam: winnerTeam.name,
              winnerScore: winnerTeam.rounds[round!].reduce((sum, score) => sum + score, 0),
            })}
          </Typography>
        )}
        <Typography variant="subtitle2">{t('messages.confirmEndGame')}</Typography>
      </DialogConfirm>
    </>
  );
}
