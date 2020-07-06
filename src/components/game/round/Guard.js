import { useParams } from 'react-router-dom'
import useGame from 'components/game/useGame'

const RoundGuard = ({ children, fallback = null }) => {
  const { round } = useParams()
  const { teams } = useGame()

  return teams.some((team) => Object.keys(team.rounds).includes(round)) ? children : fallback
}

export default RoundGuard
