import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  startIcon: {
    marginLeft: '0',
    marginRight: '0',
  },
});

const ButtonExtended = ({
  label, hideLabel = false, icon, color = 'primary', size = 'small', ...props
}) => {
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
};

export default ButtonExtended;
