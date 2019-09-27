import useGame from 'components/game/useGame';

const RoundGuard = ({
  children, gameKey, round, fallback = null,
}) => {
  const { teams } = useGame({ gameKey });

  return teams.some(team => Object.keys(team.rounds).includes(round))
    ? children
    : fallback;
};

export default RoundGuard;
