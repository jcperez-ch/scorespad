import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

const RoundListField = styled(TextField)`
  width: 100px;

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
  & input {
    color: var(--text-field-default-border-color);
    text-align: center;
    font-size: 1.4rem;
  }
`;

RoundListField.defaultProps = {
  margin: 'dense',
  variant: 'outlined',
  type: 'text',
  autoComplete: 'off',
};

export default RoundListField;
