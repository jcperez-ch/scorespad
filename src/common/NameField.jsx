import React from 'react';
import { noop } from 'lodash';
import TextField from '@material-ui/core/TextField';

import { onChange, onEnter } from 'utils/handlers';

const NameField = ({
  onChange: handleChange,
  onEnter: handleEnter,
  validation = {},
  ...props
}) => {
  const { errors = {}, touched = false, reset = noop } = validation;

  return (
    <TextField
      error={touched && !!errors.name}
      fullWidth
      helperText={touched && errors.name}
      onChange={onChange(handleChange, reset)}
      onKeyDown={onEnter(handleEnter)}
      {...props}
    />
  );
};

export default NameField;
