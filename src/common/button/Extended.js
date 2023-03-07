import React from 'react';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  startIcon: {
    marginLeft: '0',
    marginRight: '0',
  },
});

function ButtonExtended({ label, hideLabel = false, icon, color = 'primary', size = 'small', ...props }) {
  const { startIcon } = useStyles();
  return (
    <Button
      variant="outlined"
      classes={hideLabel ? { startIcon } : undefined}
      startIcon={typeof icon === 'string' ? <Icon className="icon">{icon}</Icon> : icon}
      aria-label={label}
      color={color}
      size={size}
      {...props}
    >
      {!hideLabel && <span className="label">{label}</span>}
    </Button>
  );
}

export default ButtonExtended;
