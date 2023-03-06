import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

const RoundListField = styled(TextField)`
  width: 100px;

  input {
    text-align: center;
  }
`;

RoundListField.defaultProps = {
  margin: 'dense',
  variant: 'outlined',
  type: 'text',
};

export default RoundListField;
