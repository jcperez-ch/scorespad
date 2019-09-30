import React from 'react'

import GameActionAdd from './game/action/Add'
import GameList from './game/list/List'
import PageViewTracker from './PageViewTracker'

const Landing = ({ navigate, uri }) => {
  const goToGame = (id) => navigate(`games/${id}`)
  return (
    <>
      <GameList onItemClick={goToGame} />
      <GameActionAdd onAdd={goToGame} />
      <PageViewTracker uri={uri} />
    </>
  )
}

export default Landing
