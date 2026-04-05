import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';

import VideogameAssetOffIcon from '@mui/icons-material/VideogameAssetOff';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import PageNullState from '@/components/PageNullState';
import FlexExpand from '@/components/common/FlexExpand';
import PastRoundBreadcrumbs from '@/components/rounds/PastRoundBreadcrumbs';
import RoundDeleteButton from '@/components/rounds/RoundDeleteButton';
import RoundLeaderboard from '@/components/rounds/RoundLeaderboard';
import { usePastRoundResults } from '@/hooks/usePastRoundResults';

export default function PastRound() {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const { gameKey, roundKey } = useParams();
  const results = usePastRoundResults(roundKey!);
  return (
    <>
      {results.length === 0 ? (
        <PageNullState icon={<VideogameAssetOffIcon />} message={t('text.noPastRoundResults')}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`/games/${gameKey}/history`)}
          >
            {t('button.back')}
          </Button>
        </PageNullState>
      ) : (
        <FlexExpand>
          <Stack paddingTop={2} spacing={2}>
            <Stack paddingInline={2} spacing={2}>
              <PastRoundBreadcrumbs round={roundKey!} />
            </Stack>
            <RoundLeaderboard readonly={true} round={roundKey!} />
          </Stack>
          <Stack paddingInline={2} spacing={2} marginBottom={2}>
            <RoundDeleteButton />
          </Stack>
        </FlexExpand>
      )}
    </>
  );
}
