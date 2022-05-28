import React from 'react'
import { useNavigate } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'

import BarToolbar from 'common/bar/Toolbar'
import BarTitle from 'common/bar/Title'
import LocaleMenu from 'components/locale/Menu'
import ThemeMenu from 'components/theme/Menu'

const RoundTop = () => {
  const navigate = useNavigate()
  const goToGame = () => navigate(-1)

  return (
    <BarToolbar>
      <IconButton color="inherit" onClick={goToGame}>
        <Icon>arrow_back</Icon>
      </IconButton>
      <BarTitle pl="0.5rem" />
      <LocaleMenu />
      <ThemeMenu />
    </BarToolbar>
  )
}

export default RoundTop
