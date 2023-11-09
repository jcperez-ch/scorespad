import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const StyledPrimaryButton = styled(Button)`
  background-color: var(--button-background-color);
  &:hover {
    background-color: var(--button-hover-background-color);
    color: var(--button-hover-text-color);
  }
  &:active {
    background-color: var(--button-active-background-color);
    color: var(--button-active-text-color);
  }
`;

StyledPrimaryButton.defaultProps = {
  color: 'primary',
  variant: 'contained',
};

export default StyledPrimaryButton;
