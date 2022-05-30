import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Fab from '@material-ui/core/Fab'

import NameField from 'common/NameField'
import CommonRoutePaper from 'common/styled/RoutePaper'
import GameStoreContext from 'components/game/context/Store'
import { createGame } from 'components/game/actionCreators'
import useValidation from 'utils/validation'

export default () => {
  const [newName, setNewName] = useState('')
  const navigate = useNavigate()
  const [t] = useTranslation()
  const [, dispatch] = useContext(GameStoreContext)
  const { error, onSubmit } = useValidation({
    name: newName,
    errorMessage: 'errors.requiredGameName',
    onSubmit: () => {
      const id = Date.now().toString(36)
      dispatch(createGame(id, newName))
      navigate(`/games/${id}`)
    },
  })

  return (
    <CommonRoutePaper>
      <NameField variant="outlined" label={t('placeholder.gameName')} onChange={setNewName} onEnter={onSubmit} error={error} value={newName} />
      <Fab variant="extended" color="primary" size="large" aria-label={t('button.createGame')} onClick={onSubmit}>
        {t('button.createGame')}
      </Fab>
    </CommonRoutePaper>
  )
}
