import { createStore, get } from 'idb-keyval';

import { StoreState } from './State';

export const store = createStore('scorespad-db', 'scorespad-store');

export async function getInitialState(): Promise<StoreState> {
  const [games = {}, theme, locale]: [
    StoreState['games'],
    StoreState['theme'],
    StoreState['locale'],
  ] = await Promise.all([get('gms', store), get('theme', store), get('locale', store)]);

  Object.keys(games).forEach((gameKey) => {
    const game = games[gameKey];
    const pastChampionships = new Set<string>();
    game.teams.forEach((team) => {
      if (team.key == null) {
        team.key = `team-${Math.random().toString(36).slice(2)}`;
      }
      if (game.pastRounds == null && team.rounds != null) {
        const { rounds } = team;
        const teamRounds = Object.keys(rounds);
        if (teamRounds.length > 0) {
          teamRounds.forEach((round) => {
            pastChampionships.add(round);
          });
        }
      }
    });
    if (pastChampionships.size > 0) {
      game.pastRounds = Array.from(pastChampionships).sort();
    }
  });

  return { games, theme, locale };
}
