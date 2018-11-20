import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const BarTitle = styled(Typography).attrs({
  component: 'h2',
  variant: 'h6',
  color: 'inherit',
})`
  flex: 1;
  user-select: none;
`;

export default BarTitle;
