import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { themeColors } from 'themes'

const Anchor = styled(Link)`
  color: ${themeColors.primary};
  transition: color 250ms ease;
  text-decoration: none;

  &:hover {
    color: ${themeColors.primaryDark};
    text-decoration: underline;
  }
`

export default Anchor
