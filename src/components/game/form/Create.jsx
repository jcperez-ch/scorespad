import React, { useContext, useState } from 'react'
import { noop } from 'lodash'
import { useTranslation } from 'react-i18next'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'

import SlideUp from 'common/SlideUp'
import DialogTitle from 'common/dialog/Title'
import DialogHeadline from 'common/dialog/Headline'
import NameField from 'common/NameField'
import GameStoreContext from 'components/game/context/Store'
import { createGame } from 'components/game/actionCreators'
import useGameValidation from './useValidation'

const GameFormCreate = ({ open, onClose = noop, onSuccess = noop }) => {
  const [newName, setNewName] = useState('')
  const [t] = useTranslation()
  const [, dispatch] = useContext(GameStoreContext)
  const validation = useGameValidation({
    name: newName,
  })
  const { touch, valid } = validation

  const handleAdd = () => {
    touch()
    if (valid) {
      const id = Date.now().toString(36)
      dispatch(createGame(id, newName))
      onSuccess(id)
    }
  }

  return (
    <Dialog
      fullScreen
      id="game-add-dialog"
      onClose={onClose}
      aria-labelledby="game-add-dialog-title"
      open={open}
      TransitionComponent={SlideUp}
    >
      <DialogTitle id="game-add-dialog-title" onClose={onClose}>
        {t('button.createGame')}
      </DialogTitle>
      <DialogContent>
        <DialogHeadline>{t('text.selectNewGame')}</DialogHeadline>
        <NameField
          label={t('placeholder.gameName')}
          onChange={setNewName}
          onEnter={handleAdd}
          validation={validation}
          value={newName}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('button.cancel')}</Button>
        <Button variant="contained" color="primary" autoFocus onClick={handleAdd}>
          {t('button.createGame')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default GameFormCreate
