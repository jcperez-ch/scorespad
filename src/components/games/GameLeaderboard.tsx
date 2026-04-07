import { Activity, useContext } from 'react';

import StarIcon from '@mui/icons-material/Star';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import styled from '@emotion/styled';

import ProfileAvatar from '@/components/profiles/ProfileAvatar';
import ProfilePlaceholderIcon from '@/components/profiles/ProfilePlaceholderIcon';
import ProfilesContext from '@/config/ProfilesContext';
import useGame from '@/hooks/useGame';
import usePastRounds from '@/hooks/usePastRounds';
import { Team } from '@/store/State';

import HeadlineText from '../common/HeadlineText';

const StyledCount = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: end;
  gap: 0.25em;
`;

export default function GameLeaderboard() {
  const game = useGame();
  const pastRounds = usePastRounds();
  const [profiles] = useContext(ProfilesContext);

  return (
    <List sx={{ width: '100%' }}>
      {game.teams
        .toSorted((a: Team, b: Team) => b.championships.length - a.championships.length)
        .map((team) => {
          const profile = team.profileKey ? profiles[team.profileKey] : undefined;
          return (
            <ListItem
              key={team.key}
              secondaryAction={
                <StyledCount>
                  <Activity mode={team.championships.length > 0 ? 'visible' : 'hidden'}>
                    <StarIcon />
                  </Activity>
                  <HeadlineText>
                    <span>{pastRounds.length === 0 ? '-' : team.championships.length}</span>
                  </HeadlineText>
                </StyledCount>
              }
            >
              <ListItemAvatar>
                {profile ? (
                  <ProfileAvatar
                    avatarType={profile.avatarType}
                    emoji={profile.emoji}
                    name={profile.name}
                  />
                ) : (
                  <ProfilePlaceholderIcon gameType={game.gameType} name={team.name} />
                )}
              </ListItemAvatar>
              <ListItemText
                primary={<HeadlineText>{team.name}</HeadlineText>}
                secondary={profile?.footline}
              />
            </ListItem>
          );
        })}
    </List>
  );
}
