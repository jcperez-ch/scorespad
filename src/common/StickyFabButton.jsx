import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { themeScreenSizes } from 'themes';

const StyledButton = styled(Button).attrs({
  variant: 'fab',
})`
  bottom: 0.5rem;
  right: 0.5rem;
  && {
    position: fixed;
  }

  @media (min-width: ${themeScreenSizes.smallScreenMin}) {
    bottom: 1rem;
    right: 1rem;
  }

  @media (min-width: ${themeScreenSizes.mediumScreenMin}) {
    bottom: 1.5rem;
    right: 1.5rem;
  }
`;

const StickyFabButton = ({ icon, ...props }) => (
  <StyledButton {...props}>
    <Icon>{icon}</Icon>
  </StyledButton>
);

export default StickyFabButton;
