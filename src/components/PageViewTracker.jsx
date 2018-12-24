import { memo } from 'react';

const PageViewTracker = memo(({ pathname }) => {
  if (window.ga) {
    window.ga('send', 'pageview', pathname);
  }
  return null;
});

export default PageViewTracker;
