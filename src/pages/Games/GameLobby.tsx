import { Activity, useState } from 'react';
import { useTranslation } from 'react-i18next';

import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { Stack } from '@mui/material';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

import PageNullState from '@/components/PageNullState';
import FlexExpand from '@/components/common/FlexExpand';
import GameLeaderboard from '@/components/games/GameLeaderboard';
import RoundStartButton from '@/components/rounds/RoundStartButton';
import useGame from '@/hooks/useGame';
import usePastRounds from '@/hooks/usePastRounds';

import GameMigration from './GameMigration';

export default function GameLobby() {
  const [t] = useTranslation();
  const game = useGame();
  const pastRounds = usePastRounds();
  const [migrationOpen, setMigrationOpen] = useState(false);
  if (pastRounds.length === 0 && game.round == null) {
    return (
      <PageNullState icon={<MilitaryTechIcon />} message={t('text.roundReady')} variant="subtitle1">
        <RoundStartButton />
      </PageNullState>
    );
  }
  return (
    <FlexExpand>
      {(!game.gameType || !game.participantType) && (
        <Alert
          severity="warning"
          sx={{ m: 2 }}
          action={
            <Button color="inherit" size="small" onClick={() => setMigrationOpen(true)}>
              {t('migration.setGameType')}
            </Button>
          }
        >
          {t(!game.gameType ? 'migration.gameTypeWarning' : 'migration.participantTypeWarning')}
        </Alert>
      )}
      <GameLeaderboard />
      <Activity mode={game.round == null ? 'visible' : 'hidden'}>
        <Stack paddingInline={2} spacing={2} marginBottom={2}>
          <RoundStartButton variant="outlined" />
        </Stack>
      </Activity>
      <GameMigration open={migrationOpen} onClose={() => setMigrationOpen(false)} />
    </FlexExpand>
  );
}
