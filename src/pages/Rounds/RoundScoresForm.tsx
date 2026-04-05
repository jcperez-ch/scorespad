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
import { addScores } from '@/store/Actions';

const multipleOfFiveTypes = new Set(['canasta', 'continental']);

export default function RoundScoresForm() {
  const { gameKey } = useParams();
  const { round, teams, gameType } = useGame();
  const navigate = useNavigate();
  const [t] = useTranslation();
  const [, dispatch] = useContext(GamesContext);
  const handleClose = () => navigate(`/games/${gameKey}/rounds/${round}`);
  const requiresMultipleOfFive = multipleOfFiveTypes.has(gameType);
  const step = requiresMultipleOfFive ? 5 : 1;
  const [scores, setScores] = useState<Record<string, string>>(
    teams.reduce<Record<string, string>>(
      (dictionary, team) => ({ ...dictionary, [team.key]: '' }),
      {},
    ),
  );

  const getValidationError = (value: string): string | undefined => {
    if (!requiresMultipleOfFive || value === '') return undefined;
    const num = parseInt(value, 10);
    if (Number.isNaN(num)) return undefined;
    if (num % 5 !== 0) return t('errors.multipleOfFive');
    return undefined;
  };

  const hasValidationErrors =
    requiresMultipleOfFive &&
    Object.values(scores).some((value) => {
      if (value === '') return false;
      const num = parseInt(value, 10);
      return !Number.isNaN(num) && num % 5 !== 0;
    });

  const onSubmit = () => {
    if (hasValidationErrors) return;
    dispatch(
      addScores(
        gameKey!,
        round!,
        Object.keys(scores).reduce<Record<string, number>>((obj, key) => {
          const value = parseInt(scores[key], 10);
          obj[key] = Number.isNaN(value) ? 0 : value;
          return obj;
        }, {}),
      ),
    );
    handleClose();
  };
  return (
    <>
      <DialogBody
        title={t('title.scores')}
        headline={t('messages.hintAddScores')}
        onClose={handleClose}
      >
        <Stack padding={2} spacing={2}>
          {teams.map((team) => {
            const score = team.rounds[round!].reduce((sum, score) => sum + score, 0).toString();
            const numericScore = Number.parseInt(score, 10);
            const numericScoreInput = Number.parseInt(scores[team.key], 10);
            const validationError = getValidationError(scores[team.key]);
            return (
              <NameField
                error={validationError}
                helperText={
                  validationError ??
                  (Number.isNaN(numericScoreInput)
                    ? t('placeholder.scoreCurrent', {
                        team: team.name,
                        score,
                      })
                    : t('placeholder.scoreHint', {
                        team: team.name,
                        score: String(numericScore + numericScoreInput),
                      }))
                }
                key={team.key}
                label={team.name}
                onChange={(value: string) => {
                  setScores((prevScores) =>
                    prevScores[team.key] === value
                      ? prevScores
                      : { ...prevScores, [team.key]: value },
                  );
                }}
                onEnter={onSubmit}
                placeholder={t('placeholder.score', {
                  score,
                })}
                slotProps={{
                  htmlInput: {
                    pattern: '^-?\\d+$',
                    min: -Infinity,
                    max: Infinity,
                    step,
                  },
                }}
                type="number"
                value={scores[team.key] ?? ''}
              />
            );
          })}
        </Stack>
      </DialogBody>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          {t('button.cancel')}
        </Button>
        <Button autoFocus variant="outlined" onClick={onSubmit} disabled={hasValidationErrors}>
          {t('button.submit')}
        </Button>
      </DialogActions>
    </>
  );
}
