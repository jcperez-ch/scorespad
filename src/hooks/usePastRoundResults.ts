import { useMemo } from 'react';

import useGame from './useGame';

export function usePastRoundResults(roundKey: string): { team: string; scores: number[] }[] {
  const game = useGame();

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
                    scores: team.rounds[roundKey],
                  },
                ];
              },
              [] as { team: string; scores: number[] }[],
            )
            .toSorted(
              (a, b) =>
                b.scores.reduce((sum, score) => sum + score, 0) -
                a.scores.reduce((sum, score) => sum + score, 0),
            ),
    [game.teams, roundKey],
  );
}
