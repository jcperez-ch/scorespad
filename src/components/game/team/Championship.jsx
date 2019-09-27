import React, { useCallback } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import Flex from 'common/Flex';

const StyledIcon = styled(Icon)`
  && {
    font-size: 0.75rem;
  }
`;

const StyledButton = styled(IconButton).attrs({
  variant: 'text',
  color: 'primary',
})`
  && {
    padding: 0.5rem;
  }
`;

const TeamChampionship = ({ championship, onClick }) => {
  const handleClick = useCallback(() => onClick(championship), [
    championship,
    onClick,
  ]);
  return (
    <Flex flex="1 1 auto">
      <StyledButton onClick={handleClick} onTouchEnd={handleClick}>
        <StyledIcon>star</StyledIcon>
      </StyledButton>
    </Flex>
  );
};

export default TeamChampionship;
