import { useTranslation } from 'react-i18next';

import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import styled from '@emotion/styled';

import { ParticipantType } from '@/store/State';

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

type Props = {
  value: ParticipantType | '';
  onChange: (value: ParticipantType) => void;
};

export default function GameMigrationParticipantType({ value, onChange }: Props) {
  const [t] = useTranslation();

  return (
    <Stack spacing={2} sx={{ mt: 1 }}>
      <StyledToggleButtonGroup
        value={value}
        exclusive
        onChange={(_, v: ParticipantType | null) => {
          if (v !== null) onChange(v);
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
  );
}
