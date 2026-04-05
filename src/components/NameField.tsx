import TextField, { TextFieldProps } from '@mui/material/TextField';

import styled from '@emotion/styled';

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: var(--text-field-default-border-color);
  }
  input {
    color: var(--text-field-default-border-color);
  }
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
`;

type Props = {
  error?: string | undefined;
  helperText?: string;
  onChange?: (value: string) => void;
  onEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
} & Omit<TextFieldProps, 'onChange' | 'onKeyDown' | 'error' | 'helperText' | 'autoComplete'>;

export default function NameField({ error, helperText, onChange, onEnter, ...props }: Props) {
  return (
    <StyledTextField
      {...props}
      autoComplete="off"
      error={error != null}
      fullWidth
      helperText={helperText ?? error}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { value } = event.target;
        onChange?.(value);
      }}
      onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          onEnter?.(event);
        }
      }}
    />
  );
}
