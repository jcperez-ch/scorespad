import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const BarTitle = styled(Typography).attrs({
  component: 'h2',
  variant: 'h6',
  color: 'inherit',
})`
  flex: 1;
  user-select: none;
  padding-left: ${props => props.pl || '0px'};
  padding-right: ${props => props.pr || '0px'};
  padding-top: ${props => props.pt || '0px'};
  padding-bottom: ${props => props.pb || '0px'};
`;

export default BarTitle;
