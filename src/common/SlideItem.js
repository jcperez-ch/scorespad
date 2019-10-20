import styled from 'styled-components'

const SlideItem = styled.ul`
  display: grid;
  grid-template: 1fr / 1fr;
  position: relative;

  & > * {
    grid-area: 1 / 1 / 1 / 1;
    transition: transform 250ms ease, visibility 0s ease 250ms, max-height 200ms linear;

    &:first-child {
      ${({ active }) => (active ? 'transform: translateX(-100%);visibility:hidden;max-height:0;' : 'transform: none;transition-delay: 0s;')}
    }
    &:last-child {
      ${({ active = false }) => (active ? 'transform: none;transition-delay: 0s;' : 'transform: translateX(100%);visibility:hidden;max-height:0;')}
    }
  }
`

export default SlideItem
