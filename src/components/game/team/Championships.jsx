import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Flex from 'common/Flex';
import GameUsedContext from 'components/game/context/Used';

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

const TeamChampionships = ({ history, championships }) => {
  const [gameKey] = useContext(GameUsedContext);
  const goToCampionship = round => () => history.push(`/games/${gameKey}/rounds/${round}`);
  return (
    <Flex display>
      {championships.map(round => (
        <Flex key={round} flex="1 1 auto">
          <StyledButton
            onClick={goToCampionship(round)}
            onTouchEnd={goToCampionship(round)}
          >
            <StyledIcon>star</StyledIcon>
          </StyledButton>
        </Flex>
      ))}
    </Flex>
  );
};

export default withRouter(TeamChampionships);
