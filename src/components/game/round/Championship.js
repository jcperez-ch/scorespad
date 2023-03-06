import React from 'react';
import styled from '@emotion/styled';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import ButtonsWrapper from 'common/ButtonsWrapper';
import Flex from 'common/Flex';
import noop from 'utils/fn/noop';

import RoundActionDelete from './action/Delete';

const StyledSumScore = styled(Typography)`
  && {
    font-size: 2rem;
    text-align: right;
    line-height: 1.2;
  }
`;
StyledSumScore.defaultProps = {
  variant: 'overline',
};

const StyledScore = styled(Typography)`
  && {
    font-size: 0.875rem;
    margin-left: 0.875rem;
  }
`;
StyledScore.defaultProps = {
  variant: 'overline',
};

export default function RoundChampionship({ teams, round, onDelete = noop }) {
  const teamTotal = ({ rounds }) => rounds[round].reduce((sum, value) => value + sum, 0);
  const sortedTeams = [...teams].sort((team1, team2) => teamTotal(team2) - teamTotal(team1));
  return (
    <>
      <List component="div">
        {sortedTeams.map((team) => (
          <ListItem key={`${team.name}${round}`}>
            <ListItemText disableTypography>
              <Flex display items="center" justify="space-between">
                <Typography variant="body1">{team.name}</Typography>
                <StyledSumScore>{teamTotal(team)}</StyledSumScore>
              </Flex>
              <Flex component="ul" display items="center" justify="flex-end">
                {team.rounds[round].map((score, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index}>
                    <StyledScore>{score}</StyledScore>
                  </li>
                ))}
              </Flex>
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <ButtonsWrapper>
        <RoundActionDelete round={round} onSuccess={onDelete} />
      </ButtonsWrapper>
    </>
  );
}
