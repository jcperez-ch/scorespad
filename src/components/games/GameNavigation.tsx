import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router';

import GroupsIcon from '@mui/icons-material/Groups';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import useGame from '@/hooks/useGame';
import usePastRounds from '@/hooks/usePastRounds';

export default function GameNavigation() {
  const [t] = useTranslation();
  const game = useGame();
  const navigate = useNavigate();
  const { gameKey } = useParams();
  const { pathname } = useLocation();
  const pastRounds = usePastRounds();
  const disableBottomNavigation = /^\/games\/\w+\/past\/\w+$/.test(pathname);

  if (disableBottomNavigation) {
    return null;
  }

  return (
    <BottomNavigation
      value={pathname.split('/').slice(3).join('/')}
      onChange={(_event, newValue) => {
        navigate(`/games/${gameKey}/${newValue}`);
      }}
    >
      <BottomNavigationAction
        icon={<WorkspacePremiumIcon />}
        value=""
        label={t('navigation.leaderboard')}
      />
      {game.round != null && (
        <BottomNavigationAction
          icon={<PlayCircleOutlineIcon />}
          value={`rounds/${game.round}`}
          label={t('navigation.currentRound')}
        />
      )}
      {pastRounds.length > 2 && (
        <BottomNavigationAction
          icon={<QueryStatsIcon />}
          value="stats"
          label={t('navigation.stats')}
        />
      )}
      {pastRounds.length > 0 && (
        <BottomNavigationAction
          icon={<ManageSearchIcon />}
          value="history"
          label={t('navigation.pastRounds')}
        />
      )}
      <BottomNavigationAction
        icon={<GroupsIcon />}
        value="teams"
        label={t('navigation.manageTeams')}
      />
    </BottomNavigation>
  );
}
