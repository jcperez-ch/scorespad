import { use } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';

import NotStartedIcon from '@mui/icons-material/NotStarted';
import Button, { ButtonOwnProps } from '@mui/material/Button';

import GamesContext from '@/config/GamesContext';
import useGame from '@/hooks/useGame';
import { addRound } from '@/store/Actions';

type Props = {
  variant?: ButtonOwnProps['variant'];
  color?: ButtonOwnProps['color'];
};

export default function RoundStartButton({ variant = 'contained', color = 'primary' }: Props) {
  const [t] = useTranslation();
  const [, dispatch] = use(GamesContext);
  const { gameKey } = useParams();
  const navigate = useNavigate();
  const game = useGame();
  if (game.round !== null) {
    return null;
  }
  return (
    <Button
      startIcon={<NotStartedIcon />}
      variant={variant}
      color={color}
      onClick={() => {
        const newRound = Date.now().toString(36);
        dispatch(addRound(gameKey!, newRound));
        navigate(`/games/${gameKey}/rounds/${newRound}`);
      }}
    >
      {t('navigation.newRound')}
    </Button>
  );
}
