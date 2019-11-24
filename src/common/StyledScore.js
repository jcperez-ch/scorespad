import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

const StyledScore = styled(Typography).attrs({
  align: 'center',
  component: 'div',
})`
  width: 100%;
  display: flex;
  justify-content: center;
`

export default StyledScore
