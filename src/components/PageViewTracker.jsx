import { memo } from 'react';

const PageViewTracker = memo(({ uri }) => {
  if (window.ga) {
    window.ga('send', 'pageview', uri);
  }
  return null;
});

export default PageViewTracker;
