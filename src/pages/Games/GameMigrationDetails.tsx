import { useTranslation } from 'react-i18next';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ProfileAutocomplete from '@/components/ProfileAutocomplete';
import { Game, GameType, ParticipantType, TeamMember } from '@/store/State';

export type TeamMemberState = Record<string, TeamMember[]>;

type Props = {
  game: Game;
  needsGameType: boolean;
  needsParticipantType: boolean;
  effectiveGameType?: GameType | '';
  participantType: ParticipantType | '';
  teamMembers: TeamMemberState;
  teamProfileState: Record<string, { name: string; profileKey?: string }>;
  onTeamProfileChange: (teamKey: string, name: string, profileKey?: string) => void;
  onMemberUpdate: (teamKey: string, memberIndex: number, name: string, profileKey?: string) => void;
  onMemberAdd: (teamKey: string) => void;
  onMemberRemove: (teamKey: string, memberIndex: number) => void;
};

export default function GameMigrationDetails({
  game,
  needsGameType,
  needsParticipantType,
  effectiveGameType,
  participantType,
  teamMembers,
  teamProfileState,
  onTeamProfileChange,
  onMemberUpdate,
  onMemberAdd,
  onMemberRemove,
}: Props) {
  const [t] = useTranslation();

  const showNegativeToPositive =
    effectiveGameType === 'continental' || effectiveGameType === 'mexican_train';
  const showMultipleOfFive = effectiveGameType === 'canasta' || effectiveGameType === 'continental';

  return (
    <Stack spacing={2}>
      {needsGameType && (showNegativeToPositive || showMultipleOfFive) && (
        <>
          {showNegativeToPositive && (
            <Alert severity="warning">{t('migration.negativeToPositive')}</Alert>
          )}
          {showMultipleOfFive && <Alert severity="info">{t('migration.multipleOfFive')}</Alert>}
        </>
      )}
      {needsGameType && !showNegativeToPositive && !showMultipleOfFive && (
        <Alert severity="info">{t('migration.noChanges')}</Alert>
      )}
      {game.teams.length > 0 && (
        <>
          <Typography variant="body2">{t('migration.profileLinkInfo')}</Typography>
          {game.teams.map((team) => (
            <Box key={team.key}>
              <ProfileAutocomplete
                size="small"
                id={`migration-profile-${team.key}`}
                label={team.name}
                onChange={(name, profileKey) => onTeamProfileChange(team.key, name, profileKey)}
                value={teamProfileState[team.key]?.name ?? team.name}
                profileKey={teamProfileState[team.key]?.profileKey}
              />
              {participantType === 'team' && (
                <Stack spacing={1} sx={{ pl: 4, mt: 1 }}>
                  {(teamMembers[team.key] || []).map((member, memberIndex) => (
                    <ProfileAutocomplete
                      key={memberIndex}
                      size="small"
                      id={`migration-team-${team.key}-member-${memberIndex}`}
                      label={t('placeholder.memberNumbered', { number: memberIndex + 1 })}
                      onChange={(name, profileKey) =>
                        onMemberUpdate(team.key, memberIndex, name, profileKey)
                      }
                      value={member.name}
                      profileKey={member.profileKey}
                      endAdornment={
                        member.name !== '' ? (
                          <IconButton
                            color="secondary"
                            aria-label={t('button.delete')}
                            onClick={() => onMemberRemove(team.key, memberIndex)}
                            edge="end"
                            size="small"
                          >
                            <RemoveCircleIcon fontSize="small" />
                          </IconButton>
                        ) : undefined
                      }
                    />
                  ))}
                  <div>
                    <Button
                      size="small"
                      color="secondary"
                      startIcon={<PersonAddIcon />}
                      onClick={() => onMemberAdd(team.key)}
                    >
                      {t('button.addMember')}
                    </Button>
                  </div>
                </Stack>
              )}
            </Box>
          ))}
        </>
      )}
      {needsParticipantType && participantType === 'player' && (
        <Alert severity="info">{t('migration.participantTypeInfo')}</Alert>
      )}
      {!needsGameType && !needsParticipantType && (
        <Alert severity="info">{t('migration.noChanges')}</Alert>
      )}
    </Stack>
  );
}
