import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import Extension from '@mui/icons-material/Extension';
import GridView from '@mui/icons-material/GridView';
import Layers from '@mui/icons-material/Layers';
import Style from '@mui/icons-material/Style';
import Train from '@mui/icons-material/Train';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';

import styled from '@emotion/styled';

import GamesContext from '@/config/GamesContext';
import { setGameType } from '@/store/Actions';
import { GameType } from '@/store/State';

const StyledIconRow = styled.span`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const StyledFormControl = styled(FormControl)`
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: var(--text-field-default-border-color);
    }
    &:hover fieldset {
      border-color: var(--text-field-active-border-color);
    }
    &.Mui-focused fieldset {
      border-color: var(--text-field-active-border-color);
    }
  }
  & label {
    color: var(--text-field-default-border-color);
  }
  & label.Mui-focused {
    color: var(--text-field-default-border-color);
  }
  & .MuiSelect-icon {
    color: var(--text-field-default-border-color);
  }
`;

const gameTypeIcons: Record<GameType, React.ReactNode> = {
  continental: <Style />,
  canasta: <Layers />,
  classic_dominoes: <GridView />,
  mexican_train: <Train />,
  other: <Extension />,
};

const gameTypes: GameType[] = ['continental', 'canasta', 'classic_dominoes', 'mexican_train', 'other'];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function GameMigration({ open, onClose }: Props) {
  const [t] = useTranslation();
  const { gameKey } = useParams();
  const [, dispatch] = useContext(GamesContext);
  const [activeStep, setActiveStep] = useState(0);
  const [gameType, setGameTypeState] = useState<GameType | ''>('');

  const handleNext = () => {
    if (gameType !== '') {
      setActiveStep(1);
    }
  };

  const handleBack = () => {
    setActiveStep(0);
  };

  const handleConfirm = () => {
    if (gameType !== '' && gameKey != null) {
      dispatch(setGameType(gameKey, gameType));
      handleClose();
    }
  };

  const handleClose = () => {
    setActiveStep(0);
    setGameTypeState('');
    onClose();
  };

  const showNegativeToPositive =
    gameType === 'continental' || gameType === 'mexican_train';
  const showMultipleOfFive =
    gameType === 'canasta' || gameType === 'continental';

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>{t('migration.setGameType')}</DialogTitle>
      <DialogContent>
        <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
          <Step>
            <StepLabel>{t('migration.gameTypeStep')}</StepLabel>
          </Step>
          <Step>
            <StepLabel>{t('migration.detailsStep')}</StepLabel>
          </Step>
        </Stepper>
        {activeStep === 0 && (
          <StyledFormControl fullWidth sx={{ mt: 1 }}>
            <InputLabel>{t('gameType.label')}</InputLabel>
            <Select
              value={gameType}
              label={t('gameType.label')}
              onChange={(e: SelectChangeEvent) => setGameTypeState(e.target.value as GameType)}
              renderValue={(value) => (
                <StyledIconRow>
                  {gameTypeIcons[value as GameType]}
                  {t(`gameType.${value}`)}
                </StyledIconRow>
              )}
            >
              {gameTypes.map((type) => (
                <MenuItem
                  key={type}
                  value={type}
                  sx={{ display: 'flex', alignItems: 'center', columnGap: 1.5 }}
                >
                  {gameTypeIcons[type]}
                  {t(`gameType.${type}`)}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        )}
        {activeStep === 1 && (
          <Stack spacing={2}>
            {showNegativeToPositive && (
              <Alert severity="warning">{t('migration.negativeToPositive')}</Alert>
            )}
            {showMultipleOfFive && (
              <Alert severity="info">{t('migration.multipleOfFive')}</Alert>
            )}
            {!showNegativeToPositive && !showMultipleOfFive && (
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
            <Button variant="contained" disabled={gameType === ''} onClick={handleNext}>
              {t('button.next')}
            </Button>
          </>
        )}
        {activeStep === 1 && (
          <>
            <Button color="secondary" onClick={handleBack}>
              {t('button.back')}
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
