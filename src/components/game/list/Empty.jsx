import React from 'react';
import { useTranslation } from 'react-i18next/hooks';
import WarnPlaceholder from 'common/WarnPlaceholder';

const GameListEmpty = () => {
  const [t] = useTranslation();
  return <WarnPlaceholder icon="games" message={t('text.noGames')} />;
};

export default GameListEmpty;
