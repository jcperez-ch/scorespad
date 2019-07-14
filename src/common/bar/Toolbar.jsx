import React from 'react';
import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import { themeColors } from 'themes';

const StyledAppBar = styled.div`
  background-color: ${themeColors.primary};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  flex: 0 0 auto;
  position: static;
`;

const StyledToolbar = styled(Toolbar)`
  align-items: center;
  display: flex;
  justify-content: space-between;

  .material-icons {
    color: ${themeColors.foregroundOnPrimary};
  }
`;

const BarToolbar = ({ children }) => (
  <StyledAppBar>
    <StyledToolbar>{children}</StyledToolbar>
  </StyledAppBar>
);

export default BarToolbar;
