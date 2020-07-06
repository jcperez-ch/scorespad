import React from 'react'
import { isEmpty, noop } from 'lodash'
import List from '@material-ui/core/List'

import useGame from 'components/game/useGame'
import TeamListEmpty from './Empty'
import TeamListItem from './Item'

const TeamList = ({ onClickChampionship = noop }) => {
  const game = useGame()

  if (!game) {
    return null
  }
  const { teams = [], round } = game

  return isEmpty(teams) ? (
    <TeamListEmpty />
  ) : (
    <List component="div">
      {teams.map((team, index) => (
        <TeamListItem key={team.name} index={index} onClickChampionship={onClickChampionship} round={round} {...team} />
      ))}
    </List>
  )
}

export default TeamList
