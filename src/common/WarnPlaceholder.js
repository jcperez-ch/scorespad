import React from 'react';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { themeColors, themeScreenSizes } from 'themes';

const FullViewportHeight = styled.div`
  align-items: center;
  background-color: ${themeColors.paperBackground};
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 100vh;
  justify-content: center;

  > aside {
    flex: 0 0 auto;
    font-size: 60vw;

    @media (min-width: ${themeScreenSizes.smallScreenMin}) {
      font-size: 35vw;
    }
    @media (min-width: ${themeScreenSizes.mediumScreenMin}) {
      font-size: 400px;
    }
  }
  > div {
    flex: 0 0 auto;
    padding: ${({ theme = {} } = {}) => theme.mui.spacing(1)}px;
    text-align: center;
  }
`;

export default function WarnPlaceholder({ children = null, color = 'primary', icon, message }) {
  return (
    <FullViewportHeight>
      <aside>
        <Icon color={color} fontSize="inherit">
          {icon}
        </Icon>
      </aside>
      <Typography color={color} component="div" variant="body1">
        {message}
      </Typography>
      {children != null && <div>{children}</div>}
    </FullViewportHeight>
  );
}
