import React from 'react';
import TextField from '@mui/material/TextField';

import { onChange, onEnter } from 'utils/handlers';

export default function NameField({ onChange: handleChange, onEnter: handleEnter, error = null, ...props }) {
  return <TextField error={!!error} fullWidth helperText={error} onChange={onChange(handleChange)} onKeyDown={onEnter(handleEnter)} {...props} />;
}
