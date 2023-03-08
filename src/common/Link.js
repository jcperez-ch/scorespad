import { Link as RouterLink } from 'react-router-dom';

import React, { forwardRef } from 'react';

function Link({ href, ...other }, ref) {
  return <RouterLink ref={ref} to={href} {...other} />;
}

export default forwardRef(Link);
