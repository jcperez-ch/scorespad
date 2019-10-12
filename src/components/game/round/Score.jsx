import React, { useState } from 'react'
import ListItem from '@material-ui/core/ListItem'

import SlideLongRippleSwitch from 'common/SlideLongRippleSwitch'
import StyledScore from 'common/StyledScore'
import useLongRipple from 'common/useLongRipple'
import RoundScoreRemove from './form/ScoreRemove'

const GameRoundScore = ({ index, score, scoreIndex }) => {
  const [canClose, setCanClose] = useState(false)
  const handleEditMode = () => setCanClose(true)
  const handleViewMode = () => setCanClose(false)
  const rippleProps = useLongRipple({ onLongPress: handleEditMode })

  return (
    <SlideLongRippleSwitch active={canClose ? 0 : 1}>
      <RoundScoreRemove
        onClose={handleViewMode}
        onSuccess={handleViewMode}
        scoreIndex={scoreIndex}
        score={score}
        index={index}
      />
      <ListItem button dense {...rippleProps}>
        <StyledScore variant="body2">{score}</StyledScore>
      </ListItem>
    </SlideLongRippleSwitch>
  )
}

export default GameRoundScore
