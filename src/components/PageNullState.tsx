import { Activity, ReactNode } from 'react';

import { IconOwnProps } from '@mui/material/Icon';
import Typography from '@mui/material/Typography';

import styled from '@emotion/styled';

const FullViewportHeight = styled.div`
  align-items: center;
  background-color: var(--mui-palette-background-paper);
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;

  > aside {
    flex: 0 0 auto;

    svg {
      fill: var(--mui-palette-primary-main);
      font-size: 50vh;
      line-height: 1;
    }
  }
  > div {
    flex: 0 0 auto;
    padding: 1rem;
    text-align: center;
  }
`;

type Props = {
  children?: ReactNode;
  color?: IconOwnProps['color'];
  icon: IconOwnProps['children'];
  message: ReactNode;
  variant?: 'body1' | 'body2' | 'subtitle1' | 'subtitle2';
};

export default function PageNullState({
  children = null,
  color = 'secondary',
  icon,
  message,
  variant = 'body1',
}: Props) {
  return (
    <FullViewportHeight>
      <aside>{icon}</aside>
      <Typography color={color} component="div" variant={variant}>
        {message}
      </Typography>
      <Activity mode={children != null ? 'visible' : 'hidden'}>
        <div>{children}</div>
      </Activity>
    </FullViewportHeight>
  );
}
