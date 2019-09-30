import React from 'react'
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/Icon'

const Styled = styled.span`
  align-items: center;
  display: grid;
  gap: 5px;
  grid-auto-flow: column;
  padding: 0 5px;

  > .icon {
    font-size: 14px;
  }
  > .label {
    font-size: 11px;
  }
`


const ButtonExtended = ({
  label, icon, color = 'primary', size = 'small', ...props
}) => (
  <Fab variant="extended" aria-label={label} color={color} size={size} {...props}>
    <Styled>
      <Icon className="icon">{icon}</Icon>
      <span className="label">{label}</span>
    </Styled>
  </Fab>
)

export default ButtonExtended
