import { useId } from 'react';
import { Outlet, useNavigate } from 'react-router';

import { useMediaQuery, useTheme } from '@mui/material';
import Dialog from '@mui/material/Dialog';

import SlideUp from '@/components/SlideUp';
import DialogAriaLabelContext from '@/config/DialogAriaLabelContext';

type Props = {
  disabled?: boolean;
  open: boolean;
  navigateToOnClose: string | (() => void);
};

export default function DialogOutlet({ disabled = false, open, navigateToOnClose }: Props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const ariaLabelledById = useId();
  return (
    <Dialog
      aria-labelledby={ariaLabelledById}
      component="form"
      fullScreen={fullScreen}
      onClose={
        navigateToOnClose instanceof Function
          ? navigateToOnClose
          : () => navigate(navigateToOnClose)
      }
      open={open}
      scroll="paper"
      slots={{
        transition: SlideUp,
      }}
    >
      <DialogAriaLabelContext.Provider value={ariaLabelledById}>
        {!disabled && <Outlet />}
      </DialogAriaLabelContext.Provider>
    </Dialog>
  );
}
