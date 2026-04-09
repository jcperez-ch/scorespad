import { useContext } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import ProfilesContext from '@/config/ProfilesContext';
import useGame from '@/hooks/useGame';
import { Team } from '@/store/State';

import HeadlineText from '../common/HeadlineText';
import ParticipantListItemAvatar from './ParticipantListItemAvatar';
import ParticipantMenu from './ParticipantMenu';

export default function TeamsList() {
  const game = useGame();
  const [profiles] = useContext(ProfilesContext);
  const isTeamMode = game.participantType === 'team';

  return (
    <List sx={{ width: '100%' }}>
      {game.teams
        .toSorted(
          game.round == null
            ? (a: Team, b: Team) => a.championships.length - b.championships.length
            : (a: Team, b: Team) => {
                const aRound = a.rounds[game.round!];
                const bRound = b.rounds[game.round!];
                return (
                  aRound.reduce((sum, score) => sum + score, 0) -
                  bRound.reduce((sum, score) => sum + score, 0)
                );
              },
        )
        .map((team) => {
          const profile = team.profileKey ? profiles[team.profileKey] : undefined;
          const memberNames =
            isTeamMode && team.members?.length
              ? team.members
                  .map((m) => (m.profileKey && profiles[m.profileKey]?.name) || m.name)
                  .filter(Boolean)
                  .join(', ')
              : undefined;

          return (
            <ListItem
              secondaryAction={<ParticipantMenu teamKey={team.key} teamName={team.name} />}
              key={team.key}
            >
              <ListItemAvatar>
                <ParticipantListItemAvatar
                  gameType={game.gameType}
                  profileKey={team.profileKey}
                  members={team.members}
                  isTeamMode={isTeamMode}
                />
              </ListItemAvatar>
              <ListItemText
                primary={<HeadlineText>{team.name}</HeadlineText>}
                secondary={memberNames ?? profile?.footline}
              />
            </ListItem>
          );
        })}
    </List>
  );
}
