import { withRouter } from 'react-router-dom';
import useGame from 'components/game/useGame';

const RoundGuard = ({ children, match, fallback = null }) => {
  const { teams } = useGame(match.params);
  const { round } = match.params;

  if (teams.some(team => Object.keys(team.rounds).includes(round))) {
    return children;
  }

  return fallback;
};

export default withRouter(RoundGuard);
