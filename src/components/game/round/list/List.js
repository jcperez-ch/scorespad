import React from 'react'
import { isEmpty, noop } from 'lodash'
import TeamListEmpty from 'components/game/team/list/Empty'

import RoundListItem from './Item'
import RoundListWrapper from './Wrapper'

const RoundList = ({ teams = [], round, onSubmit = noop }) =>
  isEmpty(teams) ? (
    <TeamListEmpty />
  ) : (
    <RoundListWrapper>
      {teams.map((team, key) => (
        <RoundListItem key={team.name} index={key} round={round} onEnter={onSubmit} {...team} />
      ))}
    </RoundListWrapper>
  )

export default RoundList
