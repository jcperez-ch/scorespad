import styled from 'styled-components';
import { themeColors } from 'themes';

const Layout = styled.div`
  background-color: ${themeColors.background};
  color: ${themeColors.foregroundOnBackground};
  display: flex;
  flex: 1;
  flex-direction: column;
  height: auto;
  min-height: 100vh;
`;

export default Layout;
