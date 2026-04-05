import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router';

import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import VideogameAssetOffIcon from '@mui/icons-material/VideogameAssetOff';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import PageNullState from '@/components/PageNullState';
import FlexExpand from '@/components/common/FlexExpand';
import DialogOutlet from '@/components/dialog/DialogOutlet';
import RoundEndButton from '@/components/rounds/RoundEndButton';
import RoundLeaderboard from '@/components/rounds/RoundLeaderboard';
import useGame from '@/hooks/useGame';

export default function RoundDetail() {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const { gameKey, roundKey } = useParams();
  const { pathname } = useLocation();
  const game = useGame();
  const isDialogRoute = pathname !== `/games/${gameKey}/rounds/${roundKey}`;
  return (
    <>
      {game.teams.length === 0 ? (
        <PageNullState icon={<VideogameAssetOffIcon />} message={t('text.noTeams')}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`/games/${gameKey}/setup`)}
          >
            {t('button.teamSetup')}
          </Button>
        </PageNullState>
      ) : (
        <FlexExpand>
          <RoundLeaderboard round={roundKey!} />
          <Stack paddingInline={2} spacing={2} marginBottom={2}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<PlaylistAddIcon />}
              onClick={() => navigate(`/games/${gameKey}/rounds/${roundKey}/scores`)}
            >
              {t('button.addScores')}
            </Button>
            <RoundEndButton />
          </Stack>
        </FlexExpand>
      )}
      <DialogOutlet
        navigateToOnClose={`/games/${gameKey}/rounds/${roundKey}`}
        open={isDialogRoute}
      />
    </>
  );
}
