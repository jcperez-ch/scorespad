import styled from 'styled-components'

const SlideItem = styled.ul`
  display: grid;
  grid-template: 'unique' auto / auto;
  position: relative;

  & > li {
    grid-area: unique;
    transition: opacity 250ms ease, visibility 0s ease 240ms;
    display: flex;

    &:first-child {
      ${({ active }) => (active ? 'visibility:hidden;opacity: 0;' : 'transition-delay: 0s;opacity: 1;')}
    }
    &:last-child {
      ${({ active = false }) => (active ? 'transition-delay: 0s;opacity: 1;' : 'visibility:hidden;opacity: 0;')}
    }
  }
`

export default SlideItem
