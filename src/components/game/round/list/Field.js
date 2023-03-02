import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export default styled(TextField).attrs({
  margin: 'dense',
  variant: 'outlined',
  type: 'text',
})`
  width: 100px;

  input {
    text-align: center;
  }
`;
