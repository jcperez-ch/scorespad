import React from 'react';
import styled from '@emotion/styled';
import ListItem from '@mui/material/ListItem';
import StyledScore from 'common/StyledScore';
import { themeColors } from 'themes';

const StyledListItem = styled(ListItem)`
  border-top: 1px solid ${themeColors.border};
`;

export default function RoundSum({ rounds = [], round }) {
  return (
    <StyledListItem component="div">
      <StyledScore>{rounds[round].reduce((sum, value) => value + sum, 0)}</StyledScore>
    </StyledListItem>
  );
}
