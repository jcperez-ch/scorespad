import { useContext, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import Extension from '@mui/icons-material/Extension';
import GridView from '@mui/icons-material/GridView';
import Layers from '@mui/icons-material/Layers';
import Style from '@mui/icons-material/Style';
import Train from '@mui/icons-material/Train';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import styled from '@emotion/styled';

import NameField from '@/components/NameField';
import DialogBody from '@/components/dialog/DialogBody';
import DialogHeadline from '@/components/dialog/DialogHeadline';
import GamesContext from '@/config/GamesContext';
import { createGame } from '@/store/Actions';
import { GameType } from '@/store/State';
import useValidation from '@/utils/validation';

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

const gameTypes: GameType[] = [
  'continental',
  'canasta',
  'classic_dominoes',
  'mexican_train',
  'other',
];

const DEV_EMPTY = '__dev_empty__';

export default function GameFormByName() {
  const [newName, setNewName] = useState('');
  const [gameType, setGameType] = useState<GameType | typeof DEV_EMPTY>('other');
  const navigate = useNavigate();
  const [t] = useTranslation();
  const [, dispatch] = useContext(GamesContext);
  const { error, onSubmit } = useValidation({
    name: newName,
    errorMessage: 'errors.requiredGameName',
    onSubmit: () => {
      const id = Date.now().toString(36);
      dispatch(createGame(id, newName, gameType === DEV_EMPTY ? undefined : gameType));
      navigate(`/games/${id}/setup`);
    },
  });
  const handleClose = () => navigate('/');

  return (
    <>
      <DialogBody title={t('game_title')} headline={t('text.addNewGame')} onClose={handleClose}>
        <NameField
          variant="outlined"
          label={t('placeholder.game_name')}
          onChange={setNewName}
          onEnter={onSubmit}
          error={error}
          value={newName}
        />
        <StyledFormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>{t('gameType.label')}</InputLabel>
          <Select
            value={gameType}
            label={t('gameType.label')}
            onChange={(e: SelectChangeEvent) =>
              setGameType(e.target.value as GameType | typeof DEV_EMPTY)
            }
            renderValue={(value) =>
              value === DEV_EMPTY ? (
                '[DEV] --Empty'
              ) : (
                <StyledIconRow>
                  {gameTypeIcons[value as GameType]}
                  {t(`gameType.${value}`)}
                </StyledIconRow>
              )
            }
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
            {import.meta.env.DEV && (
              <MenuItem value={DEV_EMPTY}>[DEV] --Empty</MenuItem>
            )}
          </Select>
        </StyledFormControl>
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
