import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

const RoundListField = styled(TextField)`
  width: 100px;

  & input {
    text-align: center;
    font-size: 1.4rem;
    &:-webkit-autofill {
      background-color: red !important;
    }
  }
  fieldset {
    border-color: var(--text-field-default-border-color);
  }
`;

RoundListField.defaultProps = {
  margin: 'dense',
  variant: 'outlined',
  type: 'text',
  autoComplete: 'off',
};

export default RoundListField;
