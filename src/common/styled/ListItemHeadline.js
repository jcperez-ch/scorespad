import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const StyledListItemHeadline = styled(Typography)`
  text-shadow: var(--headline-text-shadow);
`;

StyledListItemHeadline.defaultProps = {
  variant: 'body1',
};

export default StyledListItemHeadline;
