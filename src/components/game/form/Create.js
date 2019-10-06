import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Router } from '@reach/router'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import KeyboardIcon from '@material-ui/icons/Keyboard'
import SpeakerPhoneIcon from '@material-ui/icons/SpeakerPhone'

import DialogTitle from 'common/dialog/Title'
import GameStoreContext from 'components/game/context/Store'
import { createGame, importGame } from 'components/game/actionCreators'

import GameFormByName from './ByName'
import GameFormByScan from './ByScan'

const GameFormCreate = ({ navigate, '*': current }) => {
  const [t] = useTranslation()
  const [, dispatch] = useContext(GameStoreContext)

  const goToGame = (id) => navigate(`../games/${id}`)
  const handleClose = () => navigate('..')

  const handleCreate = (id, newName) => {
    dispatch(createGame(id, newName))
    goToGame(id)
  }
  const handleImport = (id, newGame) => {
    dispatch(importGame(id, newGame))
    goToGame(id)
  }

  const handleChange = (_, route) => {
    navigate(route || '.')
  }

  return (
    <div
      style={{
        flex: '1 1 100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <DialogTitle id="game-add-dialog-title" onClose={handleClose}>
        {t('game_title')}
      </DialogTitle>
      <Tabs value={current} onChange={handleChange} variant="fullWidth">
        <Tab label={t('game_tab_byName')} value="" icon={<KeyboardIcon />} />
        <Tab label={t('game_tab_byScan')} value="scan" icon={<SpeakerPhoneIcon />} />
      </Tabs>
      <Router style={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column' }}>
        <GameFormByName path="/" onSuccess={handleCreate} />
        <GameFormByScan path="scan" onClose={handleClose} onSuccess={handleImport} />
      </Router>
    </div>
  )
}

export default GameFormCreate
