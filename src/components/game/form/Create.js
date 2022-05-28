import React from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import KeyboardIcon from '@material-ui/icons/Keyboard'
import SpeakerPhoneIcon from '@material-ui/icons/SpeakerPhone'

import DialogTitle from 'common/dialog/Title'

const GameFormCreate = () => {
  const [t] = useTranslation()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleChange = (_, route) => {
    navigate(route || '.')
  }

  const handleClose = () => navigate('/')

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
      <Tabs value={pathname.replace(/^\/game\/?/, '')} onChange={handleChange} variant="fullWidth">
        <Tab label={t('game_tab_byName')} value="" icon={<KeyboardIcon />} />
        <Tab label={t('game_tab_byScan')} value="scan" icon={<SpeakerPhoneIcon />} />
      </Tabs>
      <Outlet />
    </div>
  )
}

export default GameFormCreate
