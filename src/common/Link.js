import { Link as RouterLink } from 'react-router-dom';

import React, { forwardRef } from 'react';

function Link({ href, ...other }, ref) {
  // eslint-disable-next-line
  console.log({ href });
  return <RouterLink ref={ref} to={href} {...other} />;
}

export default forwardRef(Link);
