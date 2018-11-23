import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const StyledAppBar = styled(AppBar)`
  flex: 0 0 auto;
`;

const StyledToolbar = styled(Toolbar)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const BarToolbar = ({ children }) => (
  <StyledAppBar position="static">
    <StyledToolbar>{children}</StyledToolbar>
  </StyledAppBar>
);

export default BarToolbar;
