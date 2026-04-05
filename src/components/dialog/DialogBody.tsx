import { Activity } from 'react';

import { DialogContent, useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/system';

import DialogHeadline from './DialogHeadline';
import DialogTitle from './DialogTitle';

type Props = {
  children: React.ReactNode;
  headline?: string;
  onClose: () => void;
  title: string;
};

export default function DialogBody({ children, headline, onClose, title }: Props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <DialogTitle onClose={onClose}>{title}</DialogTitle>
      <DialogContent dividers={fullScreen}>
        <Activity mode={headline != null ? 'visible' : 'hidden'}>
          <DialogHeadline>{headline}</DialogHeadline>
        </Activity>
        {children}
      </DialogContent>
    </>
  );
}
