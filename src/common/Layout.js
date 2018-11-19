import styled from 'styled-components';
import { themeColors } from 'themes';

const Layout = styled.div`
  background-color: ${themeColors.background};
  display: flex;
  color: ${themeColors.backgroundInverted};
  flex: 1;
  flex-direction: column;
`;

export default Layout;
