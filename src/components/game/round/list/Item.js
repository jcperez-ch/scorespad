import React, { useContext } from 'react';
import styled from 'styled-components';
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

export default function RoundListItem({ index, name, rounds, round, onEnter: handleEnter }) {
  const teamScores = rounds[round];
  const [roundScores, setRoundScores] = useContext(GameScoresContext);
  const teamScoreValue = roundScores[index];
  const handleChange = ({ target }) => {
    setRoundScores(roundScores.map((score, i) => (i === index ? target.value : score)));
  };
  const handleOnlyNumbers = (event) => {
    if (event.key.length > 1 || /[0-9]|-|\.|,/.test(event.key)) {
      return true;
    }
    event.preventDefault();
    return false;
  };
  return (
    <li>
      <Card>
        <CardHeader title={name} titleTypographyProps={{ align: 'center' }} />
        <StyledRoundListItemContent>
          <List component="div" dense>
            {teamScores.map((score, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <GameRoundScore key={key} score={score} index={index} scoreIndex={key} />
            ))}
            <GameRoundSum rounds={rounds} round={round} />
          </List>
          <RoundListField
            inputProps={{
              tabIndex: index + 1,
              pattern: '-?\\d*',
            }}
            onChange={handleChange}
            onKeyDown={onEnter(handleEnter, handleOnlyNumbers)}
            value={teamScoreValue}
          />
        </StyledRoundListItemContent>
      </Card>
    </li>
  );
}
