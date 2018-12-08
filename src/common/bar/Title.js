import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const BarTitle = styled(Typography).attrs({
  component: 'h2',
  variant: 'h6',
  color: 'inherit',
})`
  flex: 1;
  overflow: hidden;
  padding-left: ${props => props.pl || '0px'};
  padding-right: ${props => props.pr || '0px'};
  padding-top: ${props => props.pt || '0px'};
  padding-bottom: ${props => props.pb || '0px'};
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;

  && {
    font-size: 1.2rem;
  }
`;
BarTitle.displayName = 'BarTitle';

export default BarTitle;
