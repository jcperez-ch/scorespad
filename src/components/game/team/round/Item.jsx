import React from 'react';
import { map } from 'lodash';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const TeamRound = ({ name, rounds, round }) => {
  const scores = rounds[round];
  return (
    <Grid item>
      <Card>
        <CardHeader title={name} titleTypographyProps={{ align: 'center' }} />
        <CardContent>
          <List>
            {map(scores, (score, index) => (
              <ListItem key={index}>
                <ListItemText>
                  <Typography variant="overline">{score}</Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TeamRound;
