import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const StyledListItemHeadline = styled(Typography)`
  color: var(--headline-text-color);
  text-shadow: var(--headline-text-shadow);
`;

StyledListItemHeadline.defaultProps = {
  variant: 'body1',
};

export default StyledListItemHeadline;
