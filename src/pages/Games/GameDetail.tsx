import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router';

import HomeIcon from '@mui/icons-material/Home';
import VideogameAssetOffIcon from '@mui/icons-material/VideogameAssetOff';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import ButtonIcon from '@mui/material/IconButton';

import PageNullState from '@/components/PageNullState';
import BarToolbar from '@/components/common/BarToolbar';
import FlexExpand from '@/components/common/FlexExpand';
import DialogOutlet from '@/components/dialog/DialogOutlet';
import GameGuard from '@/components/games/GameGuard';
import GameMenu from '@/components/games/GameMenu';
import GameNavigation from '@/components/games/GameNavigation';
import useGame from '@/hooks/useGame';
import gameTypeColors from '@/utils/gameTypeColors';

export default function GameDetail() {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const { gameKey } = useParams();
  const { pathname } = useLocation();
  const game = useGame();
  const isDialogRoute =
    pathname.startsWith(`/games/${gameKey}/update`) ||
    pathname.startsWith(`/games/${gameKey}/setup`) ||
    pathname.startsWith(`/games/${gameKey}/share`);
  return (
    <GameGuard>
      {game.teams.length === 0 ? (
        <>
          <BarToolbar
            startAddOn={
              <ButtonIcon onClick={() => navigate('/')} color="primary" aria-label="game">
                <HomeIcon />
              </ButtonIcon>
            }
            title={game.name}
            endAddOn={<GameMenu />}
          />
          <PageNullState icon={<VideogameAssetOffIcon />} message={t('text.noTeams')}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate(`/games/${gameKey}/setup`)}
            >
              {t('button.teamSetup')}
            </Button>
          </PageNullState>
        </>
      ) : (
        <>
          <BarToolbar
            startAddOn={
              <ButtonIcon onClick={() => navigate(`/`)} color="primary" aria-label="game">
                <HomeIcon />
              </ButtonIcon>
            }
            title={game.name}
            titleAddon={
              game.gameType && (
                <Chip
                  label={t(`gameType.${game.gameType}`)}
                  size="small"
                  sx={{
                    backgroundColor: gameTypeColors[game.gameType],
                    color: 'var(--game-type-font-color)',
                  }}
                />
              )
            }
            endAddOn={<GameMenu />}
          />
          <FlexExpand>{!isDialogRoute && <Outlet />}</FlexExpand>
          <GameNavigation />
        </>
      )}
      <DialogOutlet
        navigateToOnClose={`/games/${gameKey}`}
        open={isDialogRoute}
        disabled={!isDialogRoute}
      />
    </GameGuard>
  );
}
