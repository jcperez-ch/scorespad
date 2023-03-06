import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const StyledScore = styled(Typography)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

StyledScore.defaultProps = {
  align: 'center',
  component: 'div',
};

export default StyledScore;
