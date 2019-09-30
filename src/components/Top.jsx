import React from 'react'
import { useTranslation } from 'react-i18next'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import Tooltip from '@material-ui/core/Tooltip'

import BarToolbar from 'common/bar/Toolbar'
import BarTitle from 'common/bar/Title'
import EmptyBlock from 'common/EmptyBlock'
import Txt from 'common/Txt'

import useGame from './game/useGame'
import LocaleMenu from './locale/Menu'
import ThemeMenu from './theme/Menu'

export const TopLanding = () => (
  <BarToolbar>
    <EmptyBlock />
    <BarTitle>
      <Txt id="messages.selectGame" />
    </BarTitle>
    <LocaleMenu />
    <ThemeMenu />
  </BarToolbar>
)

export const TopRound = ({ game = {}, navigate }) => {
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

export const TopGame = ({ gameKey, navigate }) => {
  const game = useGame({ gameKey })
  const goToHome = () => navigate('../..')
  const goToAddTeam = () => navigate('team')

  const [t] = useTranslation()
  return (
    <BarToolbar>
      <IconButton color="inherit" onClick={goToHome}>
        <Icon>arrow_back</Icon>
      </IconButton>
      <BarTitle pl="0.5rem">{game && game.name}</BarTitle>
      <Tooltip disableTouchListener title={t('button.addTeam')}>
        <IconButton
          color="inherit"
          aria-label={t('button.addTeam')}
          onClick={goToAddTeam}
        >
          <Icon>add</Icon>
        </IconButton>
      </Tooltip>
      <LocaleMenu />
    </BarToolbar>
  )
}
