import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

import Flex from 'common/Flex';

const StyledIcon = styled(Icon)`
  && {
    font-size: 1.25rem;
    color: var(--star-color);
  }
`;

const StyledButton = styled(Button)`
  && {
    padding: 0.5rem;
    transition: transform 0.25s ease-out;
    font-size: 1.25rem;
    &:hover {
      transform: scale(1.25) rotate(5deg);
    }
  }
`;

StyledButton.defaultProps = {
  variant: 'text',
  color: 'primary',
};

const StyledCount = styled.span`
  color: var(--star-color);
  font-size: 0.75rem;
  text-transform: lowercase;
  padding: 0 0.25rem;
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
