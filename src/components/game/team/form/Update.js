import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { noop } from 'lodash'
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/Icon'

import ButtonExtended from 'common/button/Extended'
import StyledNameForm from 'common/styled/NameForm'
import NameField from 'common/NameField'
import GameStoreContext from 'components/game/context/Store'
import GameUsedContext from 'components/game/context/Used'
import TeamActionRemove from '../action/Remove'
import { renameTeam } from '../actionCreators'

import useGameValidation from './useValidation'

const GameFormUpdate = ({ index, name, onChange = noop, onSuccess = noop, onClose = noop }) => {
  const [, dispatch] = useContext(GameStoreContext)
  const [gameKey] = useContext(GameUsedContext)
  const [t] = useTranslation()
  const validation = useGameValidation({ name })
  const { touch, valid, reset } = validation
  const handleRename = () => {
    touch()
    if (valid) {
      reset()
      dispatch(renameTeam(gameKey, index, name))
      onSuccess()
    }
  }

  return (
    <StyledNameForm>
      <div className="field">
        <NameField label={t('placeholder.teamName')} onChange={onChange} onEnter={handleRename} validation={validation} value={name} />
        <Fab color="primary" size="small" aria-label={t('button.rename')} onClick={handleRename}>
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

export default GameFormUpdate
