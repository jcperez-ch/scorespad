import React from 'react';
import styled from 'styled-components';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { themeColors } from 'themes';

const StyledListItem = styled(ListItem)`
  border-top: 1px solid ${themeColors.border};
`;

const GameRoundSum = ({ rounds = [], round }) => (
  <StyledListItem component="div">
    <ListItemText disableTypography>
      <Typography align="center" variant="overline">
        {rounds[round].reduce((sum, value) => value + sum, 0)}
      </Typography>
    </ListItemText>
  </StyledListItem>
);

export default GameRoundSum;
