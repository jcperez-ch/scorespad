import React from 'react';
import styled from '@emotion/styled';

const StyledAppBar = styled.div`
  background-color: var(--top-bar-background-color);
  box-shadow: var(--top-bar-box-shadow);
  border-bottom: var(--top-bar-border);
  flex: 0 0 auto;
  position: static;
`;

const StyledToolbar = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  padding: 8px 24px;
  & h2 {
    color: var(--top-bar-text-color);
  }

  .material-icons {
    color: var(--top-bar-text-color);
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
