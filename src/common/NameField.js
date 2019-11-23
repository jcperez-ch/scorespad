import React from 'react'
import TextField from '@material-ui/core/TextField'

import { onChange, onEnter } from 'utils/handlers'

const NameField = ({ onChange: handleChange, onEnter: handleEnter, error = null, ...props }) => (
  <TextField error={!!error} fullWidth helperText={error} onChange={onChange(handleChange)} onKeyDown={onEnter(handleEnter)} {...props} />
)

export default NameField
