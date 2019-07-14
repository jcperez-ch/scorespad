import styled from 'styled-components';
import { themeColors } from 'themes';

const BarTitle = styled.h2`
  color: ${themeColors.foregroundOnPrimary};
  flex: 1;
  font: 1.2rem/1.2 ${({ theme }) => theme.mui.typography.fontFamily};
  overflow: hidden;
  padding: 0 0 0 ${props => props.pl || '0px'};
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
`;

export default BarTitle;
