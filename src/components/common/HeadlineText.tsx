import { useMediaQuery, useTheme } from '@mui/material';
import Typography, { TypographyOwnProps } from '@mui/material/Typography';

import styled from '@emotion/styled';

const StyledHeadlineText = styled(Typography)`
  display: inline-flex;
  align-items: center;
  justify-content: start;
  color: var(--headline-text-color);
  text-shadow: var(--headline-text-shadow);
`;

type Props = {
  children: React.ReactNode;
  color?: TypographyOwnProps['color'];
  isDecorative?: boolean;
};

export default function HeadlineText({ children, color, isDecorative }: Props) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return color == null ? (
    <StyledHeadlineText
      aria-hidden={isDecorative || undefined}
      variant={smallScreen ? 'body2' : 'body1'}
    >
      {children}
    </StyledHeadlineText>
  ) : (
    <Typography
      aria-hidden={isDecorative || undefined}
      color={color}
      variant={smallScreen ? 'body2' : 'body1'}
    >
      {children}
    </Typography>
  );
}
