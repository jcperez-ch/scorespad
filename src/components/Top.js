import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
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

export const TopRound = ({ game = {} }) => {
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

export const TopGame = () => {
  const { gameKey } = useParams()
  const game = useGame()
  const navigate = useNavigate()
  const goToHome = () => navigate('../..')
  const goToAddTeam = () => navigate('team')
  const goToShareTeam = () => navigate(`../../share/${gameKey}`, { state: { from: `../../games/${gameKey}` } })

  const [t] = useTranslation()
  return (
    <BarToolbar>
      <IconButton color="inherit" onClick={goToHome}>
        <Icon>arrow_back</Icon>
      </IconButton>
      <BarTitle pl="0.5rem">{game && game.name}</BarTitle>
      <Tooltip disableTouchListener title={t('button.addTeam')}>
        <IconButton color="inherit" aria-label={t('button.addTeam')} onClick={goToAddTeam}>
          <Icon>add</Icon>
        </IconButton>
      </Tooltip>
      <Tooltip disableTouchListener title={t('button.share')}>
        <IconButton color="inherit" aria-label={t('button.share')} onClick={goToShareTeam}>
          <Icon>share</Icon>
        </IconButton>
      </Tooltip>
    </BarToolbar>
  )
}
