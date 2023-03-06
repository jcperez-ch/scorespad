import React, { forwardRef } from 'react';
import Slide from '@mui/material/Slide';

function SlideUp(props, ref) {
  return <Slide ref={ref} direction="up" {...props} />;
}

export default forwardRef(SlideUp);
