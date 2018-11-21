import styled from 'styled-components';

const SlideItem = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
  position: relative;

  & > * {
    grid-area: 1 / 1 / 1 / 1;
  }
`;

export default SlideItem;
