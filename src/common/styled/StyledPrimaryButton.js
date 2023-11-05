import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const StyledPrimaryButton = styled(Button)`
  &:hover {
    color: var(--button-text-color);
  }
  &:active {
    background-color: var(--button-color);
    color: var(--button-text-color);
  }
`;

StyledPrimaryButton.defaultProps = {
  color: 'primary',
  variant: 'contained',
};

export default StyledPrimaryButton;
