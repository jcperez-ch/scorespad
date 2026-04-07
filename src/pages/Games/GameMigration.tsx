import { useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';

import styled from '@emotion/styled';

import ProfileAutocomplete from '@/components/ProfileAutocomplete';
import GameTypeDropdown from '@/components/games/GameTypeDropdown';
import GamesContext from '@/config/GamesContext';
import ProfilesContext from '@/config/ProfilesContext';
import { setGameType, setParticipantType, setTeamProfiles } from '@/store/Actions';
import { GameType, ParticipantType, TeamMember } from '@/store/State';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  & .MuiToggleButton-root {
    color: var(--text-field-default-border-color);
    border-color: var(--text-field-default-border-color);

    &.Mui-selected {
      background-color: var(--button-active-background-color);
      color: var(--button-active-text-color);

      &:hover {
        background-color: var(--button-hover-background-color);
      }
    }
  }
`;

type TeamMemberState = Record<string, TeamMember[]>;

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function GameMigration({ open, onClose }: Props) {
  const [t] = useTranslation();
  const { gameKey } = useParams();
  const [games, dispatch] = useContext(GamesContext);
  const [profiles] = useContext(ProfilesContext);
  const game = gameKey ? games[gameKey] : undefined;

  const needsGameType = !game?.gameType;
  const needsParticipantType = !game?.participantType;

  const steps = useMemo(() => {
    const s: string[] = [];
    if (needsGameType) s.push('gameType');
    if (needsParticipantType) s.push('participantType');
    s.push('details');
    return s;
  }, [needsGameType, needsParticipantType]);

  const [activeStep, setActiveStep] = useState(0);
  const [gameType, setGameTypeState] = useState<GameType | ''>('');
  const [participantType, setParticipantTypeState] = useState<ParticipantType | ''>('');
  const [teamMembers, setTeamMembers] = useState<TeamMemberState>({});
  const [teamProfileState, setTeamProfileState] = useState<
    Record<string, { name: string; profileKey?: string }>
  >({});

  const currentStepType = steps[activeStep];

  const initTeamMembers = () => {
    if (!game) return;
    const members: TeamMemberState = {};
    for (const team of game.teams) {
      if (team.name.includes(',')) {
        members[team.key] = team.name
          .split(',')
          .map((s) => s.trim())
          .filter((s) => s !== '')
          .map((name) => ({ name }));
      } else {
        members[team.key] = [{ name: team.name }];
      }
    }
    setTeamMembers(members);
  };

  const initTeamProfileState = () => {
    if (!game) return;
    const profileEntries = Object.entries(profiles);
    const state: Record<string, { name: string; profileKey?: string }> = {};
    for (const team of game.teams) {
      if (team.profileKey) {
        state[team.key] = {
          name: profiles[team.profileKey]?.name ?? team.name,
          profileKey: team.profileKey,
        };
      } else {
        const match = profileEntries.find(([, p]) => p.name === team.name);
        state[team.key] = {
          name: team.name,
          profileKey: match ? match[0] : undefined,
        };
      }
    }
    setTeamProfileState(state);
  };

  const handleNext = () => {
    if (currentStepType === 'gameType' && gameType === '') return;
    if (currentStepType === 'participantType' && participantType === '') return;

    const nextStep = steps[activeStep + 1];
    if (nextStep === 'details') {
      if (currentStepType === 'participantType' && participantType === 'team') {
        initTeamMembers();
      }
      initTeamProfileState();
    }

    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleConfirm = () => {
    if (gameKey == null) return;

    if (needsGameType && gameType !== '') {
      dispatch(setGameType(gameKey, gameType));
    }

    if (needsParticipantType && participantType !== '') {
      dispatch(
        setParticipantType(
          gameKey,
          participantType,
          participantType === 'team' ? teamMembers : undefined,
        ),
      );
    }

    const profileEntries = Object.entries(teamProfileState).reduce<Record<string, string>>(
      (acc, [teamKey, { profileKey }]) => {
        if (profileKey != null) acc[teamKey] = profileKey;
        return acc;
      },
      {},
    );
    if (Object.keys(profileEntries).length > 0) {
      dispatch(setTeamProfiles(gameKey, profileEntries));
    }

    handleClose();
  };

  const handleOpen = () => {
    if (steps[0] === 'details') {
      initTeamProfileState();
    }
  };

  const handleClose = () => {
    setActiveStep(0);
    setGameTypeState('');
    setParticipantTypeState('');
    setTeamMembers({});
    setTeamProfileState({});
    onClose();
  };

  const updateMember = (
    teamKey: string,
    memberIndex: number,
    name: string,
    profileKey?: string,
  ) => {
    setTeamMembers((prev) => ({
      ...prev,
      [teamKey]: prev[teamKey].map((m, i) => (i === memberIndex ? { name, profileKey } : m)),
    }));
  };

  const addMember = (teamKey: string) => {
    setTeamMembers((prev) => ({
      ...prev,
      [teamKey]: [...(prev[teamKey] || []), { name: '' }],
    }));
  };

  const removeMember = (teamKey: string, memberIndex: number) => {
    setTeamMembers((prev) => ({
      ...prev,
      [teamKey]: prev[teamKey].filter((_, i) => i !== memberIndex),
    }));
  };

  const effectiveGameType = needsGameType ? gameType : game?.gameType;
  const showNegativeToPositive =
    effectiveGameType === 'continental' || effectiveGameType === 'mexican_train';
  const showMultipleOfFive = effectiveGameType === 'canasta' || effectiveGameType === 'continental';

  const isNextDisabled =
    (currentStepType === 'gameType' && gameType === '') ||
    (currentStepType === 'participantType' && participantType === '');

  const stepLabels = steps.map((step) => {
    switch (step) {
      case 'gameType':
        return t('migration.gameTypeStep');
      case 'participantType':
        return t('migration.participantTypeStep');
      case 'details':
        return t('migration.detailsStep');
      default:
        return '';
    }
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      onTransitionEnd={() => {
        if (open) handleOpen();
      }}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        {needsGameType && needsParticipantType
          ? t('migration.setGameType')
          : needsParticipantType
            ? t('migration.setParticipantType')
            : t('migration.setGameType')}
      </DialogTitle>
      <DialogContent>
        <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
          {stepLabels.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {currentStepType === 'gameType' && (
          <GameTypeDropdown
            value={gameType}
            onChange={(value) => setGameTypeState(value as GameType)}
          />
        )}

        {currentStepType === 'participantType' && (
          <Stack spacing={2} sx={{ mt: 1 }}>
            <StyledToggleButtonGroup
              value={participantType}
              exclusive
              onChange={(_, value: ParticipantType | null) => {
                if (value !== null) setParticipantTypeState(value);
              }}
              fullWidth
            >
              <ToggleButton value="player">
                <PersonIcon sx={{ mr: 1 }} />
                {t('participantType.player')}
              </ToggleButton>
              <ToggleButton value="team">
                <GroupIcon sx={{ mr: 1 }} />
                {t('participantType.team')}
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Stack>
        )}

        {currentStepType === 'details' && (
          <Stack spacing={2}>
            {needsGameType && (showNegativeToPositive || showMultipleOfFive) && (
              <>
                {showNegativeToPositive && (
                  <Alert severity="warning">{t('migration.negativeToPositive')}</Alert>
                )}
                {showMultipleOfFive && (
                  <Alert severity="info">{t('migration.multipleOfFive')}</Alert>
                )}
              </>
            )}
            {needsGameType && !showNegativeToPositive && !showMultipleOfFive && (
              <Alert severity="info">{t('migration.noChanges')}</Alert>
            )}
            {game != null && game.teams.length > 0 && (
              <>
                <Typography variant="body2">{t('migration.profileLinkInfo')}</Typography>
                {game.teams.map((team) => (
                  <Box key={team.key}>
                    <ProfileAutocomplete
                      size="small"
                      id={`migration-profile-${team.key}`}
                      label={team.name}
                      onChange={(name, profileKey) =>
                        setTeamProfileState((prev) => ({
                          ...prev,
                          [team.key]: { name, profileKey },
                        }))
                      }
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
                              updateMember(team.key, memberIndex, name, profileKey)
                            }
                            value={member.name}
                            profileKey={member.profileKey}
                            endAdornment={
                              member.name !== '' ? (
                                <IconButton
                                  color="secondary"
                                  aria-label={t('button.delete')}
                                  onClick={() => removeMember(team.key, memberIndex)}
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
                            onClick={() => addMember(team.key)}
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
        )}
      </DialogContent>
      <DialogActions>
        {activeStep === 0 && (
          <>
            <Button color="secondary" onClick={handleClose}>
              {t('button.cancel')}
            </Button>
            <Button variant="contained" disabled={isNextDisabled} onClick={handleNext}>
              {steps.length > 1 ? t('button.next') : t('button.confirm')}
            </Button>
          </>
        )}
        {activeStep > 0 && currentStepType !== 'details' && (
          <>
            <Button color="secondary" onClick={handleBack}>
              {t('button.back')}
            </Button>
            <Button variant="contained" disabled={isNextDisabled} onClick={handleNext}>
              {t('button.next')}
            </Button>
          </>
        )}
        {currentStepType === 'details' && activeStep > 0 && (
          <>
            <Button color="secondary" onClick={handleBack}>
              {t('button.back')}
            </Button>
            <Button variant="contained" onClick={handleConfirm}>
              {t('button.confirm')}
            </Button>
          </>
        )}
        {currentStepType === 'details' && activeStep === 0 && (
          <>
            <Button color="secondary" onClick={handleClose}>
              {t('button.cancel')}
            </Button>
            <Button variant="contained" onClick={handleConfirm}>
              {t('button.confirm')}
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}
