import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCentered = styled(Stack)({
  justifyContent: 'center',
  alignItems: 'center',
});

const FullSizeCentered = styled(StyledCentered)({
  width: '100%',
  height: '100%',
});

export { FullSizeCentered };
