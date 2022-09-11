import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'

export default ({ roundKey }) => {
  const { gameKey } = useParams()
  const navigate = useNavigate()
  const [t] = useTranslation()
  const goToChampionship = () => navigate(`/games/${gameKey}/rounds/${roundKey}`)
  const playedAt = new Date(parseInt(roundKey, 36))

  return (
    <ListItem button onClick={goToChampionship}>
      <ListItemIcon>
        <Icon color="primary">star</Icon>
      </ListItemIcon>
      <ListItemText>
        {t('messages.playedAt', { date: playedAt.toDateString(), time: playedAt.toLocaleTimeString() })}
      </ListItemText>
    </ListItem>
  )
}
