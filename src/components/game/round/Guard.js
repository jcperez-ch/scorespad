import { withRouter } from 'react-router-dom';
import useGame from 'components/game/useGame';

const RoundGuard = ({ children, match, fallback = null }) => {
  const { teams } = useGame(match.params);
  const { round } = match.params;

  return teams.some(team => Object.keys(team.rounds).includes(round))
    ? children
    : fallback;
};

export default withRouter(RoundGuard);
