import React from 'react';
import { useTranslation } from 'react-i18next';
import WarnPlaceholder from 'common/WarnPlaceholder';

function TeamListEmpty() {
  const [t] = useTranslation();
  return <WarnPlaceholder icon="people" message={t('text.noTeams')} />;
}

export default TeamListEmpty;
