import { memo } from 'react';

const PageViewTracker = memo(({ pathname }) => {
  console.log(pathname);
  if (window.ga) {
    window.ga('send', 'pageview', pathname);
  }
  return null;
});

export default PageViewTracker;
