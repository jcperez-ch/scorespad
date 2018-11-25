import { reducer as teamsReducer } from './team/reducer';

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

const reducer = (state = {}, { type, ...payload }) => {
  switch (type) {
    case 'G+':
      return createGame(state, payload);
    case 'G-':
      return removeGame(state, payload);
    case 'G=':
      return reduceGame(state, payload, renameGame);
    case 'R+': {
      console.log(state, payload);
      const ns = reduceGame(
        reduceGame(state, { type, ...payload }, gameTeamsReducer),
        payload,
        selectRound,
      );
      console.log(ns);
      return ns;
    }
    default:
      return reduceGame(state, { type, ...payload }, gameTeamsReducer);
  }
};

export default reducer;
