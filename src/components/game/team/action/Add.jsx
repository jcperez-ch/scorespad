import React, { useState } from 'react';
import { noop } from 'lodash';
import { useTranslation } from 'react-i18next/hooks';
import Tooltip from '@material-ui/core/Tooltip';
import StickyFabButton from 'common/StickyFabButton';

import TeamFormCreate from '../form/Create';

const TeamActionAdd = ({ onAdd = noop }) => {
  const [open, setOpen] = useState(false);
  const [t] = useTranslation();

  const toggleOpen = () => setOpen(!open);
  const handleAdd = () => {
    setOpen(false);
    onAdd();
  };

  return (
    <>
      <Tooltip title={t('button.addTeam')}>
        <StickyFabButton
          color="primary"
          aria-owns={open ? 'team-add-dialog' : undefined}
          aria-haspopup="true"
          icon="add"
          onClick={toggleOpen}
        />
      </Tooltip>
      <TeamFormCreate open={open} onSuccess={handleAdd} onClose={toggleOpen} />
    </>
  );
};

export default TeamActionAdd;
