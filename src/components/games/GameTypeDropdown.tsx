import { useTranslation } from 'react-i18next';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import styled from '@emotion/styled';

import gameTypeIcons from '@/components/common/icons/gameTypeIcons';
import { GameType } from '@/store/State';

const StyledIconRow = styled.span`
  display: flex;
  align-items: center;
  column-gap: calc(var(--mui-spacing) * 1.5);
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

const gameTypes: GameType[] = [
  'continental',
  'canasta',
  'classic_dominoes',
  'mexican_train',
  'other',
];

type Props = {
  value: string;
  onChange: (value: string) => void;
  children?: React.ReactNode;
};

export default function GameTypeDropdown({ value, onChange, children }: Props) {
  const [t] = useTranslation();

  return (
    <StyledFormControl fullWidth id="game-type">
      <InputLabel>{t('gameType.label')}</InputLabel>
      <Select
        value={value}
        label={t('gameType.label')}
        onChange={(e: SelectChangeEvent) => onChange(e.target.value)}
        renderValue={(v) =>
          v in gameTypeIcons ? (
            <StyledIconRow>
              {gameTypeIcons[v as GameType]}
              {t(`gameType.${v}`)}
            </StyledIconRow>
          ) : (
            v
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
        {children}
      </Select>
    </StyledFormControl>
  );
}
