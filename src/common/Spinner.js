import React from 'react'
import styled, { keyframes } from 'styled-components'

const spinKeyframe = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const SpinnerElement = styled.span`
  display: inline-block;
  animation: ${spinKeyframe} 800ms ease-in-out infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`

export default () => (
  // eslint-disable-next-line jsx-a11y/accessible-emoji
  <SpinnerElement role="img" aria-label="Loading...">
    ⚙️
  </SpinnerElement>
)
