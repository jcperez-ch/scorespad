import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { LineChart } from '@mui/x-charts/LineChart';

import useGame from '@/hooks/useGame';

export default function GameStats() {
  const [t] = useTranslation();
  const { teams, pastRounds } = useGame();

  const pointsSeries = useMemo(
    () =>
      teams.map((team) => {
        let cumulative = 0;
        const data = pastRounds.map((round) => {
          const scores = team.rounds[round] ?? [];
          cumulative += scores.reduce((sum, s) => sum + s, 0);
          return cumulative;
        });
        return { label: team.name, data };
      }),
    [teams, pastRounds],
  );

  const championshipSeries = useMemo(
    () =>
      teams.map((team) => {
        const championshipSet = new Set(team.championships);
        let cumulative = 0;
        const data = pastRounds.map((round) => {
          if (championshipSet.has(round)) cumulative += 1;
          return cumulative;
        });
        return { label: team.name, data };
      }),
    [teams, pastRounds],
  );

  const xLabels = pastRounds.map((_, i) => i + 1);

  if (pastRounds.length === 0) {
    return null;
  }

  return (
    <Stack spacing={2} sx={{ p: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="subtitle1" align="center">
            {t('stats.cumulativePoints')}
          </Typography>
          <LineChart
            height={300}
            series={pointsSeries}
            xAxis={[{ data: xLabels, label: t('navigation.currentRound'), scaleType: 'point' }]}
            yAxis={[{ label: t('stats.points') }]}
          />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="subtitle1" align="center">
            {t('stats.championships')}
          </Typography>
          <LineChart
            height={300}
            series={championshipSeries}
            xAxis={[{ data: xLabels, label: t('navigation.currentRound'), scaleType: 'point' }]}
            yAxis={[{ label: t('stats.championships') }]}
          />
        </CardContent>
      </Card>
    </Stack>
  );
}
