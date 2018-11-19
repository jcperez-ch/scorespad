import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const StyledTitle = styled(Typography).attrs({
  component: 'h2',
  variant: 'h5',
})`
  text-align: center;
  text-transform: uppercase;
  padding: 0.5rem 0;
`;

export default StyledTitle;
