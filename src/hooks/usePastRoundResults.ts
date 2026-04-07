import { useMemo } from 'react';

import isLowScoreWins from '@/utils/isLowScoreWins';

import useGame from './useGame';

export function usePastRoundResults(
  roundKey: string,
): { team: string; profileKey?: string; scores: number[] }[] {
  const game = useGame();
  const lowWins = isLowScoreWins(game.gameType);

  return useMemo(
    () =>
      roundKey == null
        ? []
        : game.teams
            .reduce(
              (roundScores, team) => {
                if (team.rounds[roundKey] == null) {
                  return roundScores;
                }
                return [
                  ...roundScores,
                  {
                    team: team.name,
                    profileKey: team.profileKey,
                    scores: team.rounds[roundKey],
                  },
                ];
              },
              [] as { team: string; profileKey?: string; scores: number[] }[],
            )
            .toSorted((a, b) => {
              const aTotal = a.scores.reduce((sum, score) => sum + score, 0);
              const bTotal = b.scores.reduce((sum, score) => sum + score, 0);
              return lowWins ? aTotal - bTotal : bTotal - aTotal;
            }),
    [game.teams, roundKey, lowWins],
  );
}
