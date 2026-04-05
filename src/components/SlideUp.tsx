import { forwardRef } from 'react';

import Slide, { SlideProps } from '@mui/material/Slide';

type Props = Omit<SlideProps, 'direction'>;

function SlideUp(props: Props, ref: React.Ref<unknown>) {
  return <Slide ref={ref} direction="up" {...props} />;
}

export default forwardRef(SlideUp);
