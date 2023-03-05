import { memo } from 'react';
import { useLocation } from 'react-router-dom';

function PageViewTracker() {
  const { pathname } = useLocation();
  if (window.ga) {
    window.ga('send', 'pageview', pathname);
  } else {
    // eslint-disable-next-line no-console
    console.log('ga.send', pathname);
  }
  return null;
}

export default memo(PageViewTracker);
