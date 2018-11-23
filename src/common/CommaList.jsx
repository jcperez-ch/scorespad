import React from 'react';
import styled from 'styled-components';

const StyledCommaListItem = styled.span`
  &:after {
    content: ', ';
  }
  &:last-child:after {
    content: none;
  }
`;

const CommaList = ({ items, attribute = 'name', keyedBy = 'id' }) => items.map(item => (
  <StyledCommaListItem key={item[keyedBy]}>
    {item[attribute]}
  </StyledCommaListItem>
));

export default CommaList;
