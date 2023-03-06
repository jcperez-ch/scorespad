import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';

import SlideUp from 'common/SlideUp';

export default function GameFormCreate() {
  const navigate = useNavigate();
  const handleClose = () => navigate('/');

  return (
    <Dialog fullScreen id="team-add-dialog" onClose={handleClose} aria-labelledby="game-add-dialog-title" open TransitionComponent={SlideUp}>
      <Outlet />
    </Dialog>
  );
}
