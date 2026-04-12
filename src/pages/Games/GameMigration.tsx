import { useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';

import GamesContext from '@/config/GamesContext';
import ProfilesContext from '@/config/ProfilesContext';
import { setGameType, setParticipantType, setTeamProfiles } from '@/store/Actions';
import { GameType, ParticipantType } from '@/store/State';

import { TeamMemberState } from './GameMigrationDetails';
import GameMigrationDetails from './GameMigrationDetails';
import GameMigrationGameType from './GameMigrationGameType';
import GameMigrationParticipantType from './GameMigrationParticipantType';

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
          <GameMigrationGameType value={gameType} onChange={setGameTypeState} />
        )}

        {currentStepType === 'participantType' && (
          <GameMigrationParticipantType
            value={participantType}
            onChange={setParticipantTypeState}
          />
        )}

        {currentStepType === 'details' && game != null && (
          <GameMigrationDetails
            game={game}
            needsGameType={needsGameType}
            needsParticipantType={needsParticipantType}
            effectiveGameType={effectiveGameType}
            participantType={participantType}
            teamMembers={teamMembers}
            teamProfileState={teamProfileState}
            onTeamProfileChange={(teamKey, name, profileKey) =>
              setTeamProfileState((prev) => ({
                ...prev,
                [teamKey]: { name, profileKey },
              }))
            }
            onMemberUpdate={updateMember}
            onMemberAdd={addMember}
            onMemberRemove={removeMember}
          />
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
