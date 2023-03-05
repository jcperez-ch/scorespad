import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import Flex from 'common/Flex';

const StyledIcon = styled(Icon)`
  && {
    font-size: 0.75rem;
    padding: 0;
  }
`;

const StyledButton = styled(Button).attrs({
  variant: 'text',
  color: 'primary',
})`
  && {
    padding: 0.25rem;
  }
`;

const StyledCount = styled.span`
  padding: 0 0.25rem;
  font-size: 0.75rem;
  text-transform: lowercase;
`;

function TeamGroupedChampionships({ count, index }) {
  const navigate = useNavigate();
  const goToChampionships = () => navigate(`championships/${index}`);
  return (
    <Flex flex="0 1 auto">
      <StyledButton onClick={goToChampionships} onTouchEnd={goToChampionships}>
        <StyledIcon>star</StyledIcon>
        <StyledCount>
          <span>x</span>
          &nbsp;
          <span>{count}</span>
        </StyledCount>
      </StyledButton>
    </Flex>
  );
}

export default TeamGroupedChampionships;
