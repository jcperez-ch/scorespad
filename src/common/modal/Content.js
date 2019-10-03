import styled from 'styled-components'
import { themeColors, themeScreenSizes } from 'themes'

const ModalContent = styled.div`
  background-color: ${themeColors.paperBackground};
  box-shadow: ${({ theme = {} } = {}) => theme.mui.shadows[5]};
  left: 50%;
  padding: 1.5rem;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;

  @media (min-width: ${themeScreenSizes.smallScreenMin}) {
    width: auto;
    max-width: 65vw;
  }
  @media (min-width: ${themeScreenSizes.mediumScreenMin}) {
    max-width: ${(props) => props.maxWidth || '400px'};
  }
`

export default ModalContent
