import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Fab from '@material-ui/core/Fab'

import NameField from 'common/NameField'
import CommonRoutePaper from 'common/styled/RoutePaper'

import useGameValidation from './useValidation'

const GameFormByName = ({ onSuccess }) => {
  const [newName, setNewName] = useState('')
  const [t] = useTranslation()
  const validation = useGameValidation({
    name: newName,
  })
  const { touch, valid } = validation
  const handleAdd = () => {
    touch()
    if (valid) {
      const id = Date.now().toString(36)
      onSuccess(id, newName)
    }
  }
  return (
    <CommonRoutePaper>
      <NameField
        variant="outlined"
        label={t('placeholder.gameName')}
        onChange={setNewName}
        onEnter={handleAdd}
        validation={validation}
        value={newName}
      />
      <Fab variant="extended" color="primary" size="large" aria-label={t('button.createGame')} onClick={handleAdd}>
        {t('button.createGame')}
      </Fab>
    </CommonRoutePaper>
  )
}

export default GameFormByName
