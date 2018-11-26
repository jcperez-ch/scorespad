import React, { useContext } from 'react';
import { map } from 'lodash';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';

import GameScoresContext from 'components/game/context/Scores';
import GameRoundScore from 'components/game/round/Score';
import GameRoundSum from 'components/game/round/Sum';
import { onEnter } from 'utils/handlers';

const TeamRound = ({
  index, name, rounds, round, onEnter: handleEnter,
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
    <Grid item>
      <Card>
        <CardHeader title={name} titleTypographyProps={{ align: 'center' }} />
        <CardContent>
          <List component="div" dense>
            {map(teamScores, (score, key) => (
              <GameRoundScore key={key} score={score} />
            ))}
            <GameRoundSum rounds={rounds} round={round} />
          </List>
          <TextField
            inputProps={{
              style: { textAlign: 'center' },
              tabIndex: index + 1,
            }}
            onChange={handleChange}
            onKeyDown={onEnter(handleEnter)}
            value={teamScoreValue}
            fullWidth
            margin="dense"
            variant="outlined"
            type="number"
            pattern="-?\d*"
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TeamRound;
