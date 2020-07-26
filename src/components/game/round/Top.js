import React from 'react'
import { useNavigate } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'

import BarToolbar from 'common/bar/Toolbar'
import BarTitle from 'common/bar/Title'
import LocaleMenu from 'components/locale/Menu'
import ThemeMenu from 'components/theme/Menu'

const RoundTop = ({ game = {} }) => {
  const navigate = useNavigate()
  const { name } = game
  const goToHome = () => navigate('../../../..')
  const goToGame = () => navigate('../..')
  return (
    <BarToolbar>
      <IconButton color="inherit" onClick={game ? goToGame : goToHome}>
        <Icon>arrow_back</Icon>
      </IconButton>
      <BarTitle pl="0.5rem">{name}</BarTitle>
      <LocaleMenu />
      <ThemeMenu />
    </BarToolbar>
  )
}

export default RoundTop
