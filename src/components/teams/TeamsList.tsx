import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import useGame from '@/hooks/useGame';
import { Team } from '@/store/State';

import HeadlineText from '../common/HeadlineText';
import TeamMenu from './TeamMenu';

export default function TeamsList() {
  const game = useGame();
  return (
    <List sx={{ width: '100%' }}>
      {game.teams
        .toSorted(
          game.round == null
            ? (a: Team, b: Team) => a.championships.length - b.championships.length
            : (a: Team, b: Team) => {
                const aRound = a.rounds[game.round!];
                const bRound = b.rounds[game.round!];
                return (
                  aRound.reduce((sum, score) => sum + score, 0) -
                  bRound.reduce((sum, score) => sum + score, 0)
                );
              },
        )
        .map((team) => (
          <ListItem
            secondaryAction={<TeamMenu teamKey={team.key} teamName={team.name} />}
            key={team.key}
          >
            <ListItemText primary={<HeadlineText>{team.name}</HeadlineText>} />
          </ListItem>
        ))}
    </List>
  );
}
