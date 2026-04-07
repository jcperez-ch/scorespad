import { ReactNode, useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import InputAdornment from '@mui/material/InputAdornment';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';

import styled from '@emotion/styled';

import ProfileAvatar from '@/components/profiles/ProfileAvatar';
import ProfilesContext from '@/config/ProfilesContext';
import { AvatarType, EmojiAvatar } from '@/store/State';

type ProfileOption = {
  key: string;
  label: string;
  footline: string;
  avatarType: AvatarType;
  emoji?: EmojiAvatar;
  isCustom?: boolean;
};

const filter = createFilterOptions<ProfileOption>();

const StyledAutocomplete = styled(Autocomplete<ProfileOption, false, false, true>)`
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
  & input {
    color: var(--text-field-default-border-color);
  }
  & .MuiAutocomplete-popupIndicator {
    color: var(--text-field-default-border-color);
  }
  & .MuiAutocomplete-clearIndicator {
    color: var(--text-field-default-border-color);
  }
`;

type Props = {
  value: string;
  profileKey?: string;
  onChange: (value: string, profileKey?: string) => void;
  onEnter?: () => void;
  label: string;
  size?: 'small' | 'medium';
  autoFocus?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
  error?: string;
  endAdornment?: ReactNode;
  id?: string;
};

export default function ProfileAutocomplete({
  value,
  profileKey,
  onChange,
  onEnter,
  label,
  size,
  autoFocus,
  variant = 'outlined',
  error,
  endAdornment,
  id,
}: Props) {
  const [t] = useTranslation();
  const [profiles] = useContext(ProfilesContext);

  const options = useMemo<ProfileOption[]>(
    () =>
      Object.entries(profiles).map(([key, profile]) => ({
        key,
        label: profile.name,
        footline: profile.footline,
        avatarType: profile.avatarType,
        emoji: profile.emoji,
      })),
    [profiles],
  );

  const selectedProfile = useMemo(() => {
    if (profileKey) {
      return options.find((o) => o.key === profileKey);
    }
    return undefined;
  }, [profileKey, options]);

  if (selectedProfile) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          border: '1px solid var(--text-field-default-border-color)',
          borderRadius: 1,
          px: 1.5,
          py: size === 'small' ? 0.5 : 1,
          minHeight: size === 'small' ? 40 : 56,
        }}
      >
        <ProfileAvatar
          avatarType={selectedProfile.avatarType}
          emoji={selectedProfile.emoji}
          name={selectedProfile.label}
        />
        <Chip
          label={selectedProfile.label}
          onDelete={() => onChange('', undefined)}
          deleteIcon={<CloseIcon fontSize="small" />}
          size={size === 'small' ? 'small' : 'medium'}
          sx={{ flex: 1, justifyContent: 'flex-start' }}
        />
        {endAdornment}
      </Box>
    );
  }

  return (
    <StyledAutocomplete
      freeSolo
      options={options}
      inputValue={value}
      onInputChange={(_, newValue, reason) => {
        if (reason !== 'reset') {
          onChange(newValue, undefined);
        }
      }}
      onChange={(_, newValue) => {
        if (newValue == null) {
          onChange('', undefined);
        } else if (typeof newValue === 'string') {
          onChange(newValue, undefined);
        } else {
          onChange(newValue.label, newValue.isCustom ? undefined : newValue.key);
        }
      }}
      filterOptions={(opts, params) => {
        const filtered = filter(opts, params);
        const { inputValue } = params;
        const isExisting = opts.some((option) => inputValue === option.label);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            key: '__custom__',
            label: inputValue,
            footline: '',
            avatarType: 'initials',
            isCustom: true,
          });
        }
        return filtered;
      }}
      getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
      isOptionEqualToValue={(option, val) => option.key === val.key}
      renderOption={({ key, ...props }, option) =>
        option.isCustom ? (
          <ListItem key={key} {...props}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={`${t('button.add')} "${option.label}"`} />
          </ListItem>
        ) : (
          <ListItem key={key} {...props}>
            <ListItemAvatar>
              <ProfileAvatar
                avatarType={option.avatarType}
                emoji={option.emoji}
                name={option.label}
              />
            </ListItemAvatar>
            <ListItemText primary={option.label} secondary={option.footline} />
          </ListItem>
        )
      }
      renderInput={(params) => (
        <TextField
          {...params}
          autoFocus={autoFocus}
          variant={variant}
          size={size}
          label={label}
          error={error != null}
          helperText={error}
          autoComplete="off"
          slotProps={{
            input: {
              ...params.InputProps,
              id,
              endAdornment: (
                <>
                  {params.InputProps.endAdornment}
                  {endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>}
                </>
              ),
            },
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              onEnter?.();
            }
          }}
        />
      )}
      fullWidth
    />
  );
}
