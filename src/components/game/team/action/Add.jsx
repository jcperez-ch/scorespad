import React, { useState } from 'react';
import { noop } from 'lodash';
import { useTranslation } from 'react-i18next/hooks';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import StickyFabButton from 'common/StickyFabButton';

import TeamFormCreate from '../form/Create';

const TeamActionAdd = ({ sticky = false, onAdd = noop }) => {
  const [open, setOpen] = useState(false);
  const [t] = useTranslation();

  const toggleOpen = () => setOpen(!open);
  const handleAdd = () => {
    setOpen(false);
    onAdd();
  };

  return (
    <>
      <Tooltip disableTouchListener title={t('button.addTeam')}>
        {sticky ? (
          <IconButton
            color="inherit"
            aria-label={t('button.addTeam')}
            onClick={toggleOpen}
          >
            <Icon>add</Icon>
          </IconButton>
        ) : (
          <StickyFabButton
            color="primary"
            aria-owns={open ? 'team-add-dialog' : undefined}
            aria-haspopup="true"
            aria-label={t('button.addTeam')}
            icon="add"
            onClick={toggleOpen}
          />
        )}
      </Tooltip>
      <TeamFormCreate open={open} onSuccess={handleAdd} onClose={toggleOpen} />
    </>
  );
};

export default TeamActionAdd;
