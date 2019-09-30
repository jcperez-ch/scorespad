import React from 'react'
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/Icon'
import { themeScreenSizes } from 'themes'

const buttonPosition = (unit) => ({ position = 'right' }) => {
  switch (position) {
    case 'right':
      return `right: ${unit};`
    case 'left':
      return `left: ${unit};`
    case 'center':
      return 'left: 50%; transform: translateX(-50 %);'
    default:
      return ''
  }
}

const StyledButton = styled(Fab)`
  bottom: 0.5rem;
  ${buttonPosition('0.5rem')}
  && {
    position: fixed;
  }

  @media (min-width: ${themeScreenSizes.smallScreenMin}) {
    bottom: 1rem;
    ${buttonPosition('1rem')}
  }

  @media (min-width: ${themeScreenSizes.mediumScreenMin}) {
    right: 1.5rem;
    ${buttonPosition('1.5rem')}
  }
`

const StickyFabButton = ({ icon, ...props }) => (
  <StyledButton {...props}>
    <Icon>{icon}</Icon>
  </StyledButton>
)

export default StickyFabButton
