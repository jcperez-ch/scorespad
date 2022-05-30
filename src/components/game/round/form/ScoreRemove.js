import React, { useContext } from 'react'
import styled from 'styled-components'
import { noop } from 'lodash'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import ModalConfirm from 'common/modal/Confirm'
import GameStoreContext from 'components/game/context/Store'
import { removeScore } from '../actionCreators'

const StyledListItemText = styled(ListItemText)`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  gap: 5px;
`

export default ({ score, index, scoreIndex, onSuccess = noop, onClose = noop }) => {
  const { gameKey, round } = useParams()
  const [, dispatch] = useContext(GameStoreContext)
  const [t] = useTranslation()
  const handleRemove = () => {
    dispatch(removeScore(gameKey, round, index, scoreIndex))
    onSuccess()
  }
  return (
    <StyledListItemText component="div" disableTypography>
      <ModalConfirm
        color="primary"
        cancelText={t('button.cancel')}
        confirmText={t('button.remove')}
        title={t('title.removeScore')}
        subtitle={t('messages.confirmRemoveScore')}
        size="small"
        onConfirm={handleRemove}
      />
      <Typography align="center" variant="body2">
        {score}
      </Typography>
      <IconButton color="primary" size="small" aria-label={t('button.cancel')} onClick={onClose}>
        <Icon>check</Icon>
      </IconButton>
    </StyledListItemText>
  )
}
