import { Activity } from 'react';
import { useTranslation } from 'react-i18next';

import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { Stack } from '@mui/material';

import PageNullState from '@/components/PageNullState';
import FlexExpand from '@/components/common/FlexExpand';
import GameLeaderboard from '@/components/games/GameLeaderboard';
import RoundStartButton from '@/components/rounds/RoundStartButton';
import useGame from '@/hooks/useGame';
import usePastRounds from '@/hooks/usePastRounds';

export default function GameLobby() {
  const [t] = useTranslation();
  const game = useGame();
  const pastRounds = usePastRounds();
  if (pastRounds.length === 0 && game.round == null) {
    return (
      <PageNullState icon={<MilitaryTechIcon />} message={t('text.roundReady')} variant="subtitle1">
        <RoundStartButton />
      </PageNullState>
    );
  }
  return (
    <FlexExpand>
      <GameLeaderboard />
      <Activity mode={game.round == null ? 'visible' : 'hidden'}>
        <Stack paddingInline={2} spacing={2} marginBottom={2}>
          <RoundStartButton variant="outlined" />
        </Stack>
      </Activity>
    </FlexExpand>
  );
}
