import { useMemo } from 'react';

import useGame from './useGame';

export default function usePastRounds() {
  const { pastRounds, teams } = useGame();
  return useMemo(
    () =>
      pastRounds ??
      new Array(
        teams.reduce((championshipsSet, team) => {
          team.championships.forEach((championship) => championshipsSet.add(championship));
          return championshipsSet;
        }, new Set<string>()),
      ),
    [pastRounds, teams],
  );
}
