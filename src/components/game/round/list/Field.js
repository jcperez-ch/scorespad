import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

const RoundListField = styled(TextField).attrs({
  margin: 'dense',
  variant: 'outlined',
  type: 'text',
})`
  width: 100px;

  input {
    text-align: center;
  }
`

export default RoundListField
