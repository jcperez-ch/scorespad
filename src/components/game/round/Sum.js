import React from 'react'
import styled from 'styled-components'
import ListItem from '@material-ui/core/ListItem'
import StyledScore from 'common/StyledScore'
import { themeColors } from 'themes'

const StyledListItem = styled(ListItem)`
  border-top: 1px solid ${themeColors.border};
`

const GameRoundSum = ({ rounds = [], round }) => (
  <StyledListItem component="div">
    <StyledScore variant="overline">{rounds[round].reduce((sum, value) => value + sum, 0)}</StyledScore>
  </StyledListItem>
)

export default GameRoundSum
