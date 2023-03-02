import styled, { css } from 'styled-components';

const activeCss = css`
  transition-delay: 0s;
  opacity: 1;
  max-height: none;
`;

const inactiveCss = css`
  visibility: hidden;
  opacity: 0;
  max-height: 0;
`;

const SlideItem = styled.ul`
  display: grid;
  grid-template: 'unique' auto / auto;
  position: relative;

  & > li {
    grid-area: unique;
    transition: opacity 250ms ease, visibility 0s ease 240ms;

    &:first-child {
      ${({ active = false }) => (active ? inactiveCss : activeCss)}
    }
    &:last-child {
      ${({ active = false }) => (active ? activeCss : inactiveCss)}
    }
  }
`;

export default SlideItem;
