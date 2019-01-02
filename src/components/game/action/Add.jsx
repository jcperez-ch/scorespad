import React, { useState } from 'react';
import { useTranslation } from 'react-i18next/hooks';
import Tooltip from '@material-ui/core/Tooltip';
import StickyFabButton from 'common/StickyFabButton';

import GameFormCreate from '../form/Create';

const GameActionAdd = ({ onAdd }) => {
  const [open, setOpen] = useState(false);
  const [t] = useTranslation();

  const toggleOpen = () => setOpen(!open);
  const handleAdd = (id) => {
    setOpen(false);
    onAdd(id);
  };

  return (
    <>
      <Tooltip title={t('button.createGame')}>
        <StickyFabButton
          color="primary"
          aria-owns={open ? 'game-add-dialog' : undefined}
          aria-haspopup="true"
          aria-label={t('button.createGame')}
          icon="add"
          onClick={toggleOpen}
        />
      </Tooltip>
      <GameFormCreate open={open} onSuccess={handleAdd} onClose={toggleOpen} />
    </>
  );
};

export default GameActionAdd;
