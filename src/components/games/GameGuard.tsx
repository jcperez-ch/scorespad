import React from 'react';
import { useTranslation } from 'react-i18next';

import WarningIcon from '@mui/icons-material/Warning';

import PageNullState from '@/components/PageNullState';
import useGame from '@/hooks/useGame';

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

export default function GameGuard({ children, fallback }: Props) {
  const game = useGame();
  const [t] = useTranslation();
  return game != null
    ? children
    : (fallback ?? <PageNullState icon={<WarningIcon />} message={t('text.gameNotFound')} />);
}
