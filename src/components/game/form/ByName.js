import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Fab from '@material-ui/core/Fab'

import NameField from 'common/NameField'
import CommonRoutePaper from 'common/styled/RoutePaper'
import useValidation from 'utils/validation'

const GameFormByName = ({ onSuccess }) => {
  const [newName, setNewName] = useState('')
  const [t] = useTranslation()
  const { error, onSubmit } = useValidation({
    name: newName,
    errorMessage: 'errors.requiredGameName',
    onSubmit: () => {
      const id = Date.now().toString(36)
      onSuccess(id, newName)
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

export default GameFormByName
