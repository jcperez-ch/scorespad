import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';

import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

import NameField from '@/components/NameField';
import DialogBody from '@/components/dialog/DialogBody';
import GamesContext from '@/config/GamesContext';
import useGame from '@/hooks/useGame';
import { addScore } from '@/store/Actions';

export default function ScoreAdd() {
  const { gameKey, teamKey } = useParams();
  const { round, teams } = useGame();
  const team = teams.find((t) => t.key === teamKey);
  const navigate = useNavigate();
  const [t] = useTranslation();
  const [, dispatch] = useContext(GamesContext);
  const handleClose = () => navigate(`/games/${gameKey}/rounds/${round}`);
  const [score, setScore] = useState<string>('');

  const onSubmit = () => {
    const value = parseInt(score, 10);
    dispatch(addScore(gameKey!, round!, teamKey!, Number.isNaN(value) ? 0 : value));
    handleClose();
  };

  if (team == null) {
    return null;
  }

  const teamTotalScore = team.rounds[round!].reduce((sum, score) => sum + score, 0);
  const numericScoreInput = Number.parseInt(score, 10);

  return (
    <>
      <DialogBody
        title={t('title.addScoreToTeam', { team: team.name })}
        headline={t('messages.hintAddScore', { team: team.name })}
        onClose={handleClose}
      >
        <Stack padding={2} spacing={2}>
          <NameField
            helperText={
              Number.isNaN(numericScoreInput)
                ? t('placeholder.scoreCurrent', {
                    team: team.name,
                    score: teamTotalScore.toString(),
                  })
                : t('placeholder.scoreHint', {
                    team: team.name,
                    score: String(teamTotalScore + numericScoreInput),
                  })
            }
            key={team.key}
            label={t('text.score')}
            onChange={(value: string) => {
              setScore(value);
            }}
            onEnter={onSubmit}
            placeholder={t('placeholder.score', {
              score: teamTotalScore.toString(),
            })}
            slotProps={{
              htmlInput: {
                pattern: '^-?\\d+$',
                min: -Infinity,
                max: Infinity,
                step: 1, // 5 for canasta and continental, 1 for most others
              },
            }}
            type="number"
            value={score ?? ''}
          />
        </Stack>
      </DialogBody>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          {t('button.cancel')}
        </Button>
        <Button autoFocus variant="outlined" onClick={onSubmit}>
          {t('button.submit')}
        </Button>
      </DialogActions>
    </>
  );
}
