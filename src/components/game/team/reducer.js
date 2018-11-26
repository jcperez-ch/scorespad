export const createTeam = (state, { name, round }) => {
  const isNameUsed = state.some(team => team.name === name);
  return [
    ...state,
    {
      name: isNameUsed ? `${name} (${state.length + 1})` : name,
      championships: [],
      rounds: round === null ? {} : { [round]: [] },
    },
  ];
};

export const removeTeam = (state, { index }) => (index > state.length || index < 0
  ? state
  : state.reduce(
    (teams, team, ndx) => (index === ndx ? teams : [...teams, team]),
    [],
  ));

export const renameTeam = (state, { index, name }) => (index > state.length || index < 0
  ? state
  : [
    ...state.slice(0, index),
    { ...state[index], name },
    ...state.slice(index + 1),
  ]);

export const addRound = (state, { round }) => (state.every(team => Object.keys(team.rounds).includes(round))
  ? state
  : state.map(team => ({
    ...team,
    rounds: {
      ...team.rounds,
      [round]: [],
    },
  })));

export const addChampionship = (state, { index, round }) => (index > state.length || index < 0
  ? state
  : state.map((team, i) => (i === index
    ? {
      ...team,
      championships: [...team.championships, round],
    }
    : team)));

export const addScores = (state, { round, scores }) => (scores.length === 0
  ? state
  : state.map((team, index) => ({
    ...team,
    rounds: {
      ...team.rounds,
      [round]:
            typeof scores[index] !== 'number'
              ? team.rounds[round] || []
              : [...(team.rounds[round] || []), scores[index]],
    },
  })));

export const reducer = (state = [], { type, ...payload }) => {
  switch (type) {
    case 'T+':
      return createTeam(state, payload);
    case 'T-':
      return removeTeam(state, payload);
    case 'T=':
      return renameTeam(state, payload);
    case 'R+':
      return addRound(state, payload);
    case 'S++':
      return addScores(state, payload);
    case 'C+':
      return addChampionship(state, payload);
    default:
      return state;
  }
};
