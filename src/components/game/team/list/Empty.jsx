import React from 'react';
import { useTranslation } from 'react-i18next/hooks';
import WarnPlaceholder from 'common/WarnPlaceholder';

const TeamListEmpty = () => {
  const [t] = useTranslation();
  return <WarnPlaceholder icon="people" message={t('text.noTeams')} />;
};

export default TeamListEmpty;
