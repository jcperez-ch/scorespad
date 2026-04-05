import { useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';

import AddIcon from '@mui/icons-material/Add';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';

import NameField from '@/components/NameField';
import DialogBody from '@/components/dialog/DialogBody';
import GamesContext from '@/config/GamesContext';
import { setupGame } from '@/store/Actions';

type SetTeamNameAction = {
  type: '::';
  index: number;
  name: string;
};
type AddTeamAction = {
  type: '+';
  after?: number;
};
type RemoveTeamAction = {
  type: '-';
  index: number;
};

type GameSetupState = { name: string }[];

const setTeamName = (index: number, name: string): SetTeamNameAction => ({
  index,
  name,
  type: '::',
});

const addTeam = (after?: number): AddTeamAction => ({
  after,
  type: '+',
});

const removeTeam = (index: number): RemoveTeamAction => ({
  index,
  type: '-',
});

const reducer = (
  state: GameSetupState,
  { type, ...payload }: SetTeamNameAction | AddTeamAction | RemoveTeamAction,
): GameSetupState => {
  switch (type) {
    case '::': {
      const { index, name } = payload as SetTeamNameAction;
      if (index < 0 || index > state.length) {
        return state;
      }
      if (index === state.length) {
        return [...state, { name }];
      }
      return state.map((team, i) => (i === index ? { name } : team));
    }
    case '+': {
      const { after } = payload as AddTeamAction;
      if (after == null) {
        return [...state, { name: '' }];
      }
      if (after < -1 || after >= state.length) {
        return state;
      }
      return state.toSpliced(after + 1, 0, { name: '' });
    }
    case '-': {
      const { index } = payload as RemoveTeamAction;
      if (index < 0 || index >= state.length) {
        return state;
      }
      return state.toSpliced(index, 1);
    }
  }
  return state;
};

export default function GameSetup() {
  const { gameKey } = useParams();
  const navigate = useNavigate();
  const [t] = useTranslation();
  const [newTeams, dispatchNewTeams] = useReducer(reducer, [{ name: '' }]);
  const [, dispatch] = useContext(GamesContext);

  const handleClose = () => navigate(`/games/${gameKey}`);
  return (
    <>
      <DialogBody title={t('game_title')} headline={t('text.setupTeams')} onClose={handleClose}>
        <Stack spacing={2}>
          {newTeams.map((team, index) => (
            <NameField
              autoFocus={true}
              key={index}
              variant="outlined"
              slotProps={{
                input: {
                  id: `team-name-${index}`,
                  endAdornment:
                    team.name !== '' ? (
                      <InputAdornment position="end">
                        <IconButton
                          color="secondary"
                          aria-label={t('button.delete')}
                          onClick={() => dispatchNewTeams(removeTeam(index))}
                          edge="end"
                        >
                          <RemoveCircleIcon />
                        </IconButton>
                      </InputAdornment>
                    ) : undefined,
                },
              }}
              label={t('placeholder.teamNumbered', { number: index + 1 })}
              onChange={(name) => dispatchNewTeams(setTeamName(index, name))}
              onEnter={() => {
                dispatchNewTeams(addTeam(index));
              }}
              value={team.name}
            />
          ))}
          <div>
            <Button
              color="secondary"
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={() => dispatchNewTeams(addTeam())}
            >
              {t('button.addTeam')}
            </Button>
          </div>
        </Stack>
      </DialogBody>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          {t('button.cancel')}
        </Button>
        <Button
          autoFocus
          variant="outlined"
          onClick={() => {
            if (gameKey == null) {
              return;
            }
            dispatch(
              setupGame(
                gameKey,
                newTeams.map((team) => team.name),
              ),
            );
            navigate(`/games/${gameKey}`);
          }}
        >
          {t('button.createGame')}
        </Button>
      </DialogActions>
    </>
  );
}
