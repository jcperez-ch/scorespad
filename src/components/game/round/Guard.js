import { withRouter } from 'react-router-dom';
import useGame from 'components/game/useGame';

const RoundGuard = ({ children, match, fallback = null }) => {
  const { teams } = useGame(match.params);
  const { round } = match.params;
  console.log(teams, round);

  if (teams.some(team => Object.keys(team.rounds).includes(round))) {
    console.log('fuck');
    return children;
  }

  console.log('yeah');

  return fallback;
};

export default withRouter(RoundGuard);
