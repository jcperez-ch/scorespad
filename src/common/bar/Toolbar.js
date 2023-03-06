import React from 'react';
import styled from '@emotion/styled';
import { themeColors } from 'themes';

const StyledAppBar = styled.div`
  background-color: ${themeColors.primary};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  flex: 0 0 auto;
  position: static;
`;

const StyledToolbar = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  padding: 8px 24px;

  .material-icons {
    color: ${themeColors.foregroundOnPrimary};
  }
`;

function BarToolbar({ children }) {
  return (
    <StyledAppBar>
      <StyledToolbar>{children}</StyledToolbar>
    </StyledAppBar>
  );
}

export default BarToolbar;
