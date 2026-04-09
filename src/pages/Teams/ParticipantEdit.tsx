import { useContext, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import NameField from '@/components/NameField';
import ProfileAutocomplete from '@/components/ProfileAutocomplete';
import DialogBody from '@/components/dialog/DialogBody';
import GamesContext from '@/config/GamesContext';
import ProfilesContext from '@/config/ProfilesContext';
import useGame from '@/hooks/useGame';
import useSnackbar from '@/hooks/useSnackbar';
import { updateTeam } from '@/store/Actions';
import { TeamMember } from '@/store/State';
import useNameValidation from '@/utils/validation';

function resolveProfileName(
  profiles: Record<string, { name: string }>,
  name: string,
  profileKey?: string,
): string {
  return profileKey && profiles[profileKey] ? profiles[profileKey].name : name;
}

function resolveMembers(
  profiles: Record<string, { name: string }>,
  members: TeamMember[],
): TeamMember[] {
  return members.map((m) => ({
    ...m,
    name: resolveProfileName(profiles, m.name, m.profileKey),
  }));
}

export default function ParticipantEdit() {
  const { gameKey, teamKey } = useParams();
  const game = useGame();
  const [profiles] = useContext(ProfilesContext);
  const team = game.teams.find((t) => t.key === teamKey);
  const initialRef = useRef({
    name: team?.name ?? '',
    profileKey: team?.profileKey,
    members: team?.members,
  });
  const navigate = useNavigate();
  const [t] = useTranslation();
  const [, dispatch] = useContext(GamesContext);
  const handleClose = () => navigate(`/games/${gameKey}/teams`);
  const initialName = resolveProfileName(profiles, team?.name ?? '', team?.profileKey);
  const [newName, setNewName] = useState(initialName);
  const [newProfileKey, setNewProfileKey] = useState<string | undefined>(team?.profileKey);
  const initialMembers = team?.members ? resolveMembers(profiles, team.members) : [];
  const [members, setMembers] = useState<TeamMember[]>(initialMembers);
  const { addSnackbar } = useSnackbar();

  const isTeamMode = game.participantType === 'team';

  const { error, onSubmit } = useNameValidation({
    name: newName,
    errorMessage: 'errors.requiredTeamName',
    onSubmit: () => {
      const filteredMembers = members.filter((m) => m.name !== '');
      const resolvedName = resolveProfileName(
        profiles,
        newName,
        isTeamMode ? undefined : newProfileKey,
      );
      const resolvedMembers =
        isTeamMode && filteredMembers.length > 0
          ? resolveMembers(profiles, filteredMembers)
          : undefined;
      dispatch(
        updateTeam(
          gameKey!,
          teamKey!,
          resolvedName,
          isTeamMode ? undefined : newProfileKey,
          resolvedMembers,
        ),
      );
      addSnackbar({
        message: t('messages.participantUpdated'),
        onUndo: () => {
          dispatch(
            updateTeam(
              gameKey!,
              teamKey!,
              initialRef.current.name,
              initialRef.current.profileKey,
              initialRef.current.members,
            ),
          );
        },
      });
      handleClose();
    },
  });

  const addMemberField = () => setMembers([...members, { name: '' }]);
  const removeMemberField = (index: number) => setMembers(members.filter((_, i) => i !== index));
  const updateMember = (index: number, name: string, profileKey?: string) =>
    setMembers(members.map((m, i) => (i === index ? { name, profileKey } : m)));

  return (
    <>
      <DialogBody
        title={t('button.editParticipant')}
        headline={t('messages.hintEditParticipant')}
        onClose={handleClose}
      >
        {isTeamMode ? (
          <NameField
            autoFocus={true}
            variant="outlined"
            slotProps={{
              input: {
                id: `team-name`,
              },
            }}
            label={t('placeholder.teamGroupName')}
            onChange={setNewName}
            onEnter={addMemberField}
            value={newName}
            error={error}
          />
        ) : (
          <ProfileAutocomplete
            autoFocus={true}
            id="team-name"
            label={t('placeholder.teamName')}
            onChange={(name, profileKey) => {
              setNewName(name);
              setNewProfileKey(profileKey);
            }}
            onEnter={onSubmit}
            value={newName}
            profileKey={newProfileKey}
            error={error}
          />
        )}
        {isTeamMode && (
          <Stack spacing={1} sx={{ pl: 4, mt: 2 }}>
            {members.map((member, index) => (
              <ProfileAutocomplete
                key={index}
                autoFocus={index === members.length - 1 && member.name === ''}
                size="small"
                id={`member-${index}`}
                label={t('placeholder.memberNumbered', { number: index + 1 })}
                onChange={(name, profileKey) => updateMember(index, name, profileKey)}
                onEnter={addMemberField}
                value={member.name}
                profileKey={member.profileKey}
                endAdornment={
                  member.name !== '' ? (
                    <IconButton
                      color="secondary"
                      aria-label={t('button.delete')}
                      onClick={() => removeMemberField(index)}
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
                onClick={addMemberField}
              >
                {t('button.addMember')}
              </Button>
            </div>
          </Stack>
        )}
      </DialogBody>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          {t('button.cancel')}
        </Button>
        <Button autoFocus variant="outlined" onClick={onSubmit}>
          {t('button.save')}
        </Button>
      </DialogActions>
    </>
  );
}
