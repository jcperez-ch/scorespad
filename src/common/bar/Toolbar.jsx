import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const StyledToolbar = styled(Toolbar)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const BarToolbar = ({ children }) => (
  <AppBar position="static">
    <StyledToolbar>{children}</StyledToolbar>
  </AppBar>
);

export default BarToolbar;
