import useGame from '@/hooks/useGame';
import { Team } from '@/store/State';

import RoundLeaderboardAccordion from './RoundLeaderboardAccordion';

type Props = {
  readonly?: boolean;
  round: string;
};

const medals = ['🥇', '🥈', '🥉'];

const lowScoreWins = new Set(['mexican_train', 'continental']);

export default function RoundLeaderboard({ readonly, round }: Props) {
  const { teams, gameType } = useGame();
  const ascending = lowScoreWins.has(gameType);

  return (
    <div>
      {teams
        .toSorted((a: Team, b: Team) => {
          const aTotal = a.rounds[round!].reduce((sum, score) => sum + score, 0);
          const bTotal = b.rounds[round!].reduce((sum, score) => sum + score, 0);
          return ascending ? aTotal - bTotal : bTotal - aTotal;
        })
        .map((team, index) => (
          <RoundLeaderboardAccordion
            key={team.key}
            readonly={readonly}
            roundKey={round}
            teamKey={team.key}
            teamRound={team.rounds[round]}
            name={team.name}
            medalIcon={teams.length < 3 ? undefined : medals[index]}
          />
        ))}
    </div>
  );
}
