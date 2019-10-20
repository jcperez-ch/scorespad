import React from 'react'
import styled from 'styled-components'
import { map, sortBy } from 'lodash'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Flex from 'common/Flex'

const StyledSumScore = styled(Typography).attrs({
  variant: 'overline',
})`
  && {
    font-size: 2rem;
    text-align: right;
    line-height: 1.2;
  }
`

const StyledScore = styled(Typography).attrs({
  variant: 'overline',
})`
  && {
    font-size: 0.875rem;
    margin-left: 0.875rem;
  }
`

const Championship = ({ teams, round }) => {
  const sortedTeams = sortBy(
    teams,
    ({ rounds }) => -rounds[round].reduce((sum, value) => value + sum, 0),
  )
  return (
    <List component="div">
      {sortedTeams.map((team) => (
        <ListItem key={`${team.name}${round}`}>
          <ListItemText disableTypography>
            <Flex display items="center" justify="space-between">
              <Typography variant="body1">{team.name}</Typography>
              <StyledSumScore>
                {team.rounds[round].reduce((sum, value) => value + sum, 0)}
              </StyledSumScore>
            </Flex>
            <Flex component="ul" display items="center" justify="flex-end">
              {map(team.rounds[round], (score, index) => (
                <li key={index}>
                  <StyledScore>{score}</StyledScore>
                </li>
              ))}
            </Flex>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default Championship
