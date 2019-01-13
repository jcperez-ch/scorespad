import React, { Suspense } from 'react';

import getI18n from 'i18n';
import Storage from 'common/Storage';
import Spinner from 'common/Spinner';

const LocaleProvider = ({ initial = 'es', children }) => {
  const storage = 'locale';
  const i18n = getI18n(initial);

  return (
    <Suspense fallback={Spinner}>
      <Storage index={storage} value={i18n.language} />
      {children}
    </Suspense>
  );
};

export default LocaleProvider;
