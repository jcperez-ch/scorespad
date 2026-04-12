import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { LineChart } from '@mui/x-charts/LineChart';

import styled from '@emotion/styled';

import useGame from '@/hooks/useGame';

const SCROLL_THRESHOLD = 10;
const MIN_POINT_WIDTH = 60;

const StyledChartScroller = styled.div<{ scrollable: boolean }>`
  overflow-x: ${({ scrollable }) => (scrollable ? 'auto' : 'visible')};
  touch-action: ${({ scrollable }) => (scrollable ? 'pan-x' : 'auto')};

  ${({ scrollable }) =>
    scrollable &&
    `
    & svg {
      touch-action: pan-x;
    }
  `}
`;

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
  const scrollable = pastRounds.length > SCROLL_THRESHOLD;
  const chartWidth = scrollable ? pastRounds.length * MIN_POINT_WIDTH : undefined;

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
          <StyledChartScroller scrollable={scrollable}>
            <LineChart
              height={300}
              width={chartWidth}
              series={pointsSeries}
              xAxis={[{ data: xLabels, label: t('navigation.currentRound'), scaleType: 'point' }]}
              yAxis={[{ label: t('stats.points') }]}
            />
          </StyledChartScroller>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="subtitle1" align="center">
            {t('stats.championships')}
          </Typography>
          <StyledChartScroller scrollable={scrollable}>
            <LineChart
              height={300}
              width={chartWidth}
              series={championshipSeries}
              xAxis={[{ data: xLabels, label: t('navigation.currentRound'), scaleType: 'point' }]}
              yAxis={[{ label: t('stats.championships') }]}
            />
          </StyledChartScroller>
        </CardContent>
      </Card>
    </Stack>
  );
}
