import { noop } from 'lodash'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/Icon'

import ButtonExtended from 'common/button/Extended'
import StyledNameForm from 'common/styled/NameForm'
import NameField from 'common/NameField'
import GameStoreContext from 'components/game/context/Store'
import useValidation from 'utils/validation'

import TeamActionRemove from '../action/Remove'
import { renameTeam } from '../actionCreators'

const TeamFormUpdate = ({ index, name, onChange = noop, onSuccess = noop, onClose = noop }) => {
  const [, dispatch] = useContext(GameStoreContext)
  const { gameKey } = useParams()
  const [t] = useTranslation()
  const { error, onSubmit } = useValidation({
    name,
    errorMessage: 'errors.requiredTeamName',
    onSubmit: () => {
      dispatch(renameTeam(gameKey, index, name))
      onSuccess()
    },
  })

  return (
    <StyledNameForm>
      <div className="field">
        <NameField label={t('placeholder.teamName')} onChange={onChange} onEnter={onSubmit} error={error} value={name} />
        <Fab color="primary" size="small" aria-label={t('button.rename')} onClick={onSubmit}>
          <Icon>check</Icon>
        </Fab>
      </div>
      <div className="buttons">
        <ButtonExtended icon="cancel" label={t('button.cancel')} onClick={onClose} />
        <TeamActionRemove name={name} index={index} />
      </div>
    </StyledNameForm>
  )
}

export default TeamFormUpdate
