import { get } from 'lodash';
import { reducer as teamsReducer } from './team/reducer';

const reduceGame = (state, { key, ...payload }, reduceFunction) => {
  if (state[key]) {
    const game = reduceFunction(state[key], payload);
    return game === state[key] ? state : { ...state, [key]: game };
  }
  return state;
};

const gameTeamsReducer = (state, payload) => {
  const teams = teamsReducer(state.teams, payload);
  return teams === state.teams ? state : { ...state, teams };
};

export const createGame = (state, { key, name }) => {
  const isNameUsed = Object.keys(state).some(
    gameKey => state[gameKey].name === name,
  );
  return {
    ...state,
    [key]: {
      name: isNameUsed ? `${name} (${key})` : name,
      round: null,
      teams: [],
    },
  };
};

export const removeGame = (state, { key }) => (state[key]
  ? Object.keys(state).reduce(
    (games, k) => (k === key ? games : { ...games, [k]: state[k] }),
    {},
  )
  : state);

export const renameGame = (state, { name }) => (state.name === name ? state : { ...state, name });

export const selectRound = (state, { round }) => (state.round === round ? state : { ...state, round });

export const endRound = (state, { round }) => {
  if (state.round === null) {
    return state;
  }
  const totals = state.teams.map(({ rounds }) => rounds[round].reduce((sum, score) => sum + score, 0));
  const [, ...scores] = totals;
  const winnerIndex = scores.reduce(
    (winner, score, index) => (score > totals[winner] ? index : winner),
    0,
  );

  return gameTeamsReducer(
    { ...state, round: null },
    { type: 'C+', index: winnerIndex, round },
  );
};

const reducer = (state = {}, { type, ...payload }) => {
  switch (type) {
    case '-- --':
      return payload;
    case 'G+':
      if (window.ga) {
        window.ga('send', 'event', 'Game', 'create', 'name', payload.name);
      }
      return createGame(state, payload);
    case 'G-':
      if (window.ga) {
        window.ga(
          'send',
          'event',
          'Game',
          'remove',
          'name',
          get(state, `${payload.key}.name`, ''),
          {
            nonInteraction: true,
          },
        );
      }
      return removeGame(state, payload);
    case 'G=':
      if (window.ga) {
        window.ga('send', 'event', 'Game', 'rename', 'name', payload.name);
      }
      return reduceGame(state, payload, renameGame);
    case 'G$':
      if (window.ga) {
        window.ga(
          'send',
          'event',
          'Game',
          'finish',
          'name',
          get(state, `${payload.key}.name`, ''),
        );
      }
      return reduceGame(state, payload, endRound);
    case 'R+':
      return reduceGame(
        reduceGame(state, { type, ...payload }, gameTeamsReducer),
        payload,
        selectRound,
      );
    default:
      return reduceGame(state, { type, ...payload }, gameTeamsReducer);
  }
};

export default reducer;
