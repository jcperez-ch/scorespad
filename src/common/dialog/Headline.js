import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const DialogHeadline = styled(Typography)`
  padding: 1rem 0 0.5rem;
`;

DialogHeadline.defaultProps = {
  variant: 'body2',
  gutterBottom: true,
};

export default DialogHeadline;
