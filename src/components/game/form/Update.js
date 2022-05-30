import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { noop } from 'lodash'
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/Icon'

import ButtonExtended from 'common/button/Extended'
import StyledNameForm from 'common/styled/NameForm'
import NameField from 'common/NameField'
import GameStoreContext from 'components/game/context/Store'
import useValidation from 'utils/validation'

import GameActionRemove from '../action/Remove'
import { renameGame } from '../actionCreators'

export default ({ id, name, onChange = noop, onSuccess = noop, onClose = noop }) => {
  const [, dispatch] = useContext(GameStoreContext)
  const [t] = useTranslation()
  const navigate = useNavigate()
  const { error, onSubmit } = useValidation({
    name,
    errorMessage: 'errors.requiredGameName',
    onSubmit: () => {
      dispatch(renameGame(id, name))
      onSuccess()
    },
  })
  const handleShare = () => navigate(`share/${id}`, { from: '/' })

  return (
    <StyledNameForm component="div">
      <div className="field">
        <NameField label={t('placeholder.gameName')} onChange={onChange} onEnter={onSubmit} error={error} value={name} />
        <Fab color="primary" size="small" aria-label={t('button.rename')} onClick={onSubmit}>
          <Icon>check</Icon>
        </Fab>
      </div>
      <div className="buttons">
        <ButtonExtended icon="cancel" label={t('button.cancel')} onClick={onClose} />
        <ButtonExtended icon="mobile_screen_share" label={t('button.share')} onClick={handleShare} />
        <GameActionRemove id={id} />
      </div>
    </StyledNameForm>
  )
}
