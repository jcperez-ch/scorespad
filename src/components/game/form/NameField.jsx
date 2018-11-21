import React from 'react';
import TextField from '@material-ui/core/TextField';

import { onChange, onEnter } from 'utils/handlers';

const GameFormNameField = ({
  label,
  onChange: handleChange,
  onEnter: handleEnter,
  validation,
  value,
}) => {
  const { errors, touched, reset } = validation;

  return (
    <TextField
      error={touched && !!errors.name}
      fullWidth
      label={label}
      helperText={touched && errors.name}
      value={value}
      onChange={onChange(handleChange, reset)}
      onKeyDown={onEnter(handleEnter)}
    />
  );
};

export default GameFormNameField;
