import React, { useContext, useState, useEffect } from 'react'
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

import { createTeam } from '../actionCreators'
import useTeamValidation from './useValidation'
import useGame from '../../useGame'

const TeamFormCreate = ({ gameKey, navigate }) => {
  const game = useGame({ gameKey })
  const { round } = game
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [t] = useTranslation()
  const [, dispatch] = useContext(GameStoreContext)
  const validation = useTeamValidation({ name })
  const { touch, valid } = validation

  const handleClose = () => navigate('..')
  const handleAdd = () => {
    touch()
    if (valid) {
      dispatch(createTeam(gameKey, round, name))
      handleClose()
    }
  }

  useEffect(() => {
    if (!open) {
      setOpen(true)
    }
  }, [open])

  return (
    <Dialog
      fullScreen
      id="team-add-dialog"
      onClose={handleClose}
      aria-labelledby="team-add-dialog-title"
      open={open}
      TransitionComponent={SlideUp}
    >
      <DialogTitle id="team-add-dialog-title" onClose={handleClose}>
        {t('button.addTeam')}
      </DialogTitle>
      <DialogContent>
        <DialogHeadline>{t('text.addNewTeam')}</DialogHeadline>
        <NameField
          label={t('placeholder.teamName')}
          onChange={setName}
          onEnter={handleAdd}
          validation={validation}
          value={name}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('button.cancel')}</Button>
        <Button variant="contained" color="primary" autoFocus onClick={handleAdd}>
          {t('button.addTeam')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default TeamFormCreate