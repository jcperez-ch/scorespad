import React, { useContext } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';

import CardHeader from 'common/card/Header';
import GameScoresContext from 'components/game/context/Scores';
import GameRoundScore from 'components/game/round/Score';
import GameRoundSum from 'components/game/round/Sum';
import { onEnter } from 'utils/handlers';
import RoundListField from './Field';

const StyledRoundListItemContent = styled.div`
  padding: 16px;
  text-align: center;
`;

const RoundListItem = ({
  index,
  name,
  rounds,
  round,
  onEnter: handleEnter,
}) => {
  const teamScores = rounds[round];
  const [roundScores, setRoundScores] = useContext(GameScoresContext);
  const teamScoreValue = roundScores[index];
  const handleChange = ({ target }) => {
    setRoundScores(
      roundScores.map((score, i) => (i === index ? target.value : score)),
    );
  };
  return (
    <li>
      <Card>
        <CardHeader title={name} titleTypographyProps={{ align: 'center' }} />
        <StyledRoundListItemContent>
          <List component="div" dense>
            {map(teamScores, (score, key) => (
              <GameRoundScore
                key={key}
                score={score}
                index={index}
                scoreIndex={key}
              />
            ))}
            <GameRoundSum rounds={rounds} round={round} />
          </List>
          <RoundListField
            inputProps={{
              tabIndex: index + 1,
              pattern: '-?\\d*',
            }}
            onChange={handleChange}
            onKeyDown={onEnter(handleEnter)}
            value={teamScoreValue}
          />
        </StyledRoundListItemContent>
      </Card>
    </li>
  );
};

export default RoundListItem;
