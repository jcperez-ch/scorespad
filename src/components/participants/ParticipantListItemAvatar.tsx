import { useContext } from 'react';

import AvatarGroup from '@mui/material/AvatarGroup';

import styled from '@emotion/styled';

import ProfileAvatar from '@/components/profiles/ProfileAvatar';
import ProfilePlaceholderIcon from '@/components/profiles/ProfilePlaceholderIcon';
import ProfilesContext from '@/config/ProfilesContext';
import { GameType, TeamMember } from '@/store/State';

const StyledAvatarGroup = styled(AvatarGroup)`
  & .MuiAvatar-root {
    width: 32px;
    height: 32px;
    font-size: 0.875rem;
  }
`;

type Props = {
  gameType?: GameType;
  profileKey?: string;
  members?: TeamMember[];
  isTeamMode: boolean;
};

export default function ParticipantListItemAvatar({
  gameType,
  profileKey,
  members,
  isTeamMode,
}: Props) {
  const [profiles] = useContext(ProfilesContext);
  const profile = profileKey ? profiles[profileKey] : undefined;

  if (isTeamMode && members?.length) {
    const membersWithProfiles = members.filter((m) => m.profileKey && profiles[m.profileKey]);
    if (membersWithProfiles.length > 0) {
      const hasNonProfileMembers = members.length > membersWithProfiles.length;
      return (
        <StyledAvatarGroup max={4} spacing="small">
          {membersWithProfiles.map((m: TeamMember) => {
            const p = profiles[m.profileKey!];
            return (
              <ProfileAvatar
                key={m.profileKey}
                avatarType={p.avatarType}
                emoji={p.emoji}
                name={p.name}
              />
            );
          })}
          {hasNonProfileMembers && <ProfilePlaceholderIcon gameType={gameType} />}
        </StyledAvatarGroup>
      );
    }
  }

  if (profile) {
    return (
      <ProfileAvatar avatarType={profile.avatarType} emoji={profile.emoji} name={profile.name} />
    );
  }

  return <ProfilePlaceholderIcon gameType={gameType} />;
}
