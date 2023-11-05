import styled from '@emotion/styled';
import Fab from '@mui/material/Fab';

const StyledFab = styled(Fab)`
  &:hover {
    background-color: var(--button-color);
    color: var(--button-text-color);
  }
  &:active {
    background-color: var(--button-color);
    color: var(--button-text-color);
  }
`;

export default StyledFab;
