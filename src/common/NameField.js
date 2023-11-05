import React from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

import { onChange, onEnter } from 'utils/handlers';

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

export default function NameField({ onChange: handleChange, onEnter: handleEnter, error = null, ...props }) {
  return <StyledTextField error={!!error} fullWidth helperText={error} onChange={onChange(handleChange)} onKeyDown={onEnter(handleEnter)} {...props} />;
}
