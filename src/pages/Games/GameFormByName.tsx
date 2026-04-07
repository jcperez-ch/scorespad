import { useContext, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import styled from '@emotion/styled';

import NameField from '@/components/NameField';
import DialogBody from '@/components/dialog/DialogBody';
import DialogHeadline from '@/components/dialog/DialogHeadline';
import GameTypeDropdown from '@/components/games/GameTypeDropdown';
import GamesContext from '@/config/GamesContext';
import { createGame } from '@/store/Actions';
import { GameType, ParticipantType } from '@/store/State';
import useValidation from '@/utils/validation';

const StyledFormFields = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: calc(var(--mui-spacing) * 2);
`;

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

const DEV_EMPTY = '__dev_empty__';

export default function GameFormByName() {
  const [newName, setNewName] = useState('');
  const [gameType, setGameType] = useState<GameType | typeof DEV_EMPTY>('other');
  const [participantType, setParticipantType] = useState<ParticipantType>('player');
  const navigate = useNavigate();
  const [t] = useTranslation();
  const [, dispatch] = useContext(GamesContext);
  const { error, onSubmit } = useValidation({
    name: newName,
    errorMessage: 'errors.requiredGameName',
    onSubmit: () => {
      const id = Date.now().toString(36);
      dispatch(
        createGame(id, newName, gameType === DEV_EMPTY ? undefined : gameType, participantType),
      );
      navigate(`/games/${id}/setup`);
    },
  });
  const handleClose = () => navigate('/');

  return (
    <>
      <DialogBody title={t('game_title')} headline={t('text.addNewGame')} onClose={handleClose}>
        <StyledFormFields>
          <NameField
            variant="outlined"
            label={t('placeholder.game_name')}
            onChange={setNewName}
            onEnter={onSubmit}
            error={error}
            value={newName}
          />
          <GameTypeDropdown value={gameType} onChange={(value) => setGameType(value as GameType)}>
            {import.meta.env.DEV && <MenuItem value={DEV_EMPTY}>[DEV] --Empty</MenuItem>}
          </GameTypeDropdown>
        </StyledFormFields>
        <DialogHeadline>{t('participantType.label')}</DialogHeadline>
        <StyledToggleButtonGroup
          value={participantType}
          exclusive
          onChange={(_, value) => value && setParticipantType(value)}
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
        <DialogHeadline>
          <Trans
            components={{ a: <Link href="./scan" /> }}
            i18nKey="text.addNewGameByScan"
            values={{ here: t('button.here') }}
          />
        </DialogHeadline>
      </DialogBody>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          {t('button.cancel')}
        </Button>
        <Button autoFocus onClick={onSubmit}>
          {t('button.createGame')}
        </Button>
      </DialogActions>
    </>
  );
}
