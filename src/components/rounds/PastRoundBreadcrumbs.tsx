import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { formatRelative } from 'date-fns';

import useGame from '@/hooks/useGame';
import useLocalizedFormatRelativeOptions from '@/locale/useLocalizedFormatRelativeOptions';

type Props = {
  round: string;
};

export default function PastRoundBreadcrumbs({ round }: Props) {
  const [t] = useTranslation();
  const { gameKey } = useParams();
  const formatOptions = useLocalizedFormatRelativeOptions();
  const game = useGame();

  if (game === null) {
    return null;
  }

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href={`/games/${gameKey}`}>
        {game.name}
      </Link>
      <Link underline="hover" color="inherit" href={`/games/${gameKey}/history`}>
        {t('navigation.pastRounds')}
      </Link>
      <Typography sx={{ color: 'text.primary' }}>
        {formatRelative(new Date(parseInt(round, 36)), new Date(), formatOptions)}
      </Typography>
    </Breadcrumbs>
  );
}
