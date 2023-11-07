import styled from '@emotion/styled';
import Fab from '@mui/material/Fab';

const StyledFab = styled(Fab)`
  &:hover {
    background-color: var(--button-hover-background-color);
    color: var(--button-hover-text-color);
  }
  &:active {
    background-color: var(--button-active-background-color);
    color: var(--button-active-text-color);
  }
`;

export default StyledFab;
