import { useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';

import AddIcon from '@mui/icons-material/Add';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';

import NameField from '@/components/NameField';
import ProfileAutocomplete from '@/components/ProfileAutocomplete';
import DialogBody from '@/components/dialog/DialogBody';
import GamesContext from '@/config/GamesContext';
import { setupGame } from '@/store/Actions';
import { TeamMember } from '@/store/State';

type SetTeamNameAction = {
  type: '::';
  index: number;
  name: string;
  profileKey?: string;
};
type AddTeamAction = {
  type: '+';
  after?: number;
};
type RemoveTeamAction = {
  type: '-';
  index: number;
};
type SetMemberNameAction = {
  type: 'M::';
  teamIndex: number;
  memberIndex: number;
  name: string;
  profileKey?: string;
};
type AddMemberAction = {
  type: 'M+';
  teamIndex: number;
};
type RemoveMemberAction = {
  type: 'M-';
  teamIndex: number;
  memberIndex: number;
};

type TeamEntry = { name: string; profileKey?: string; members: TeamMember[] };
type GameSetupState = TeamEntry[];
type GameSetupAction =
  | SetTeamNameAction
  | AddTeamAction
  | RemoveTeamAction
  | SetMemberNameAction
  | AddMemberAction
  | RemoveMemberAction;

const setTeamName = (index: number, name: string, profileKey?: string): SetTeamNameAction => ({
  index,
  name,
  profileKey,
  type: '::',
});

const addTeam = (after?: number): AddTeamAction => ({
  after,
  type: '+',
});

const removeTeam = (index: number): RemoveTeamAction => ({
  index,
  type: '-',
});

const setMemberName = (
  teamIndex: number,
  memberIndex: number,
  name: string,
  profileKey?: string,
): SetMemberNameAction => ({
  type: 'M::',
  teamIndex,
  memberIndex,
  name,
  profileKey,
});

const addMember = (teamIndex: number): AddMemberAction => ({
  type: 'M+',
  teamIndex,
});

const removeMember = (teamIndex: number, memberIndex: number): RemoveMemberAction => ({
  type: 'M-',
  teamIndex,
  memberIndex,
});

function updateTeamAt(state: GameSetupState, index: number, update: Partial<TeamEntry>) {
  return state.map((team, i) => (i === index ? { ...team, ...update } : team));
}

const emptyEntry: TeamEntry = { name: '', members: [] };

const reducer = (state: GameSetupState, action: GameSetupAction): GameSetupState => {
  switch (action.type) {
    case '::': {
      const { index, name, profileKey } = action;
      if (index < 0 || index > state.length) return state;
      if (index === state.length) return [...state, { name, profileKey, members: [] }];
      return updateTeamAt(state, index, { name, profileKey });
    }
    case '+': {
      const { after } = action;
      if (after == null) return [...state, emptyEntry];
      if (after < -1 || after >= state.length) return state;
      return state.toSpliced(after + 1, 0, emptyEntry);
    }
    case '-': {
      const { index } = action;
      if (index < 0 || index >= state.length) return state;
      return state.toSpliced(index, 1);
    }
    case 'M::': {
      const { teamIndex, memberIndex, name, profileKey } = action;
      const team = state[teamIndex];
      if (!team) return state;
      const members = team.members.map((m, i) => (i === memberIndex ? { name, profileKey } : m));
      return updateTeamAt(state, teamIndex, { members });
    }
    case 'M+': {
      const { teamIndex } = action;
      const team = state[teamIndex];
      if (!team) return state;
      return updateTeamAt(state, teamIndex, {
        members: [...team.members, { name: '' }],
      });
    }
    case 'M-': {
      const { teamIndex, memberIndex } = action;
      const team = state[teamIndex];
      if (!team) return state;
      return updateTeamAt(state, teamIndex, {
        members: team.members.filter((_, i) => i !== memberIndex),
      });
    }
  }
  return state;
};

export default function GameSetup() {
  const { gameKey } = useParams();
  const navigate = useNavigate();
  const [t] = useTranslation();
  const [newTeams, dispatchNewTeams] = useReducer(reducer, [emptyEntry]);
  const [games] = useContext(GamesContext);
  const [, dispatch] = useContext(GamesContext);

  const game = gameKey ? games[gameKey] : undefined;
  const isTeamMode = game?.participantType === 'team';

  const handleClose = () => navigate(`/games/${gameKey}`);
  return (
    <>
      <DialogBody title={t('game_title')} headline={t('text.setupTeams')} onClose={handleClose}>
        <Stack spacing={2}>
          {newTeams.map((team, index) => (
            <Box key={index}>
              {isTeamMode ? (
                <NameField
                  autoFocus={true}
                  variant="outlined"
                  slotProps={{
                    input: {
                      endAdornment:
                        team.name !== '' ? (
                          <InputAdornment position="end">
                            <IconButton
                              color="secondary"
                              aria-label={t('button.delete')}
                              onClick={() => dispatchNewTeams(removeTeam(index))}
                              edge="end"
                            >
                              <RemoveCircleIcon />
                            </IconButton>
                          </InputAdornment>
                        ) : undefined,
                    },
                  }}
                  label={t('placeholder.teamGroupNumbered', { number: index + 1 })}
                  onChange={(name) => dispatchNewTeams(setTeamName(index, name))}
                  onEnter={() => dispatchNewTeams(addMember(index))}
                  value={team.name}
                />
              ) : (
                <ProfileAutocomplete
                  autoFocus={true}
                  id={`team-name-${index}`}
                  label={t('placeholder.teamNumbered', { number: index + 1 })}
                  onChange={(name, profileKey) =>
                    dispatchNewTeams(setTeamName(index, name, profileKey))
                  }
                  onEnter={() => dispatchNewTeams(addTeam(index))}
                  value={team.name}
                  profileKey={team.profileKey}
                  endAdornment={
                    team.name !== '' ? (
                      <IconButton
                        color="secondary"
                        aria-label={t('button.delete')}
                        onClick={() => dispatchNewTeams(removeTeam(index))}
                        edge="end"
                      >
                        <RemoveCircleIcon />
                      </IconButton>
                    ) : undefined
                  }
                />
              )}
              {isTeamMode && (
                <Stack spacing={1} sx={{ pl: 4, mt: 1 }}>
                  {team.members.map((member, memberIndex) => (
                    <ProfileAutocomplete
                      key={memberIndex}
                      autoFocus={true}
                      size="small"
                      id={`team-${index}-member-${memberIndex}`}
                      label={t('placeholder.memberNumbered', { number: memberIndex + 1 })}
                      onChange={(name, profileKey) =>
                        dispatchNewTeams(setMemberName(index, memberIndex, name, profileKey))
                      }
                      onEnter={() => dispatchNewTeams(addMember(index))}
                      value={member.name}
                      profileKey={member.profileKey}
                      endAdornment={
                        member.name !== '' ? (
                          <IconButton
                            color="secondary"
                            aria-label={t('button.delete')}
                            onClick={() => dispatchNewTeams(removeMember(index, memberIndex))}
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
                      onClick={() => dispatchNewTeams(addMember(index))}
                    >
                      {t('button.addMember')}
                    </Button>
                  </div>
                </Stack>
              )}
            </Box>
          ))}
          <div>
            <Button
              color="secondary"
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={() => dispatchNewTeams(addTeam())}
            >
              {t('button.addTeam')}
            </Button>
          </div>
        </Stack>
      </DialogBody>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          {t('button.cancel')}
        </Button>
        <Button
          autoFocus
          variant="outlined"
          onClick={() => {
            if (gameKey == null) {
              return;
            }
            dispatch(
              setupGame(
                gameKey,
                newTeams.map((team) => ({
                  name: team.name,
                  ...(team.profileKey ? { profileKey: team.profileKey } : {}),
                  ...(isTeamMode && team.members.filter((m) => m.name !== '').length > 0
                    ? { members: team.members.filter((m) => m.name !== '') }
                    : {}),
                })),
              ),
            );
            navigate(`/games/${gameKey}`);
          }}
        >
          {t('button.createGame')}
        </Button>
      </DialogActions>
    </>
  );
}
