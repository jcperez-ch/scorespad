import React from 'react'
import { useParams } from 'react-router-dom'
import List from '@material-ui/core/List'

import GameGuard from './game/Guard'

import useGame from './game/useGame'
import PageViewTracker from './PageViewTracker'
import ChampionshipTop from './game/team/championship/Top'
import TeamChampionshipsListItem from './game/team/championship/ListItem'

export default () => {
  const { index } = useParams()
  const { name: gameName, teams } = useGame()
  const { championships, name: teamName } = teams[index]
  return (
    <>
      <ChampionshipTop title={`${gameName} - ${teamName}`} />
      <GameGuard>
        <List component="div">
          {championships.map((championship) => (
            <TeamChampionshipsListItem key={championship} roundKey={championship} />
        ))}
        </List>
      </GameGuard>
      <PageViewTracker />
    </>
  )
}
