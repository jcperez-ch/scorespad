import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

import Flex from 'common/Flex';

const StyledIcon = styled(Icon)`
  && {
    font-size: 0.75rem;
  }
`;

const StyledButton = styled(IconButton)`
  && {
    padding: 0.5rem;
  }
`;

StyledButton.defaultProps = {
  variant: 'text',
  color: 'primary',
};

function TeamChampionship({ championship, onClick }) {
  const handleClick = useCallback(() => onClick(championship), [championship, onClick]);
  return (
    <Flex flex="0 1 auto">
      <StyledButton onClick={handleClick} onTouchEnd={handleClick}>
        <StyledIcon>star</StyledIcon>
      </StyledButton>
    </Flex>
  );
}

export default TeamChampionship;
