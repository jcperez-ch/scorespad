import useGame from '@/hooks/useGame';
import { Team } from '@/store/State';
import isLowScoreWins from '@/utils/isLowScoreWins';

import RoundLeaderboardAccordion from './RoundLeaderboardAccordion';

type Props = {
  readonly?: boolean;
  round: string;
};

const medals = ['🥇', '🥈', '🥉'];

export default function RoundLeaderboard({ readonly, round }: Props) {
  const { teams, gameType, participantType } = useGame();
  const ascending = isLowScoreWins(gameType);

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
            profileKey={team.profileKey}
            members={team.members}
            gameType={gameType}
            isTeamMode={participantType === 'team'}
            medalIcon={
              teams.length > 3 && index === teams.length - 1
                ? '💩'
                : teams.length < 3
                  ? undefined
                  : medals[index]
            }
          />
        ))}
    </div>
  );
}
