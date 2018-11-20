export const createTeam = (state, { name, round }) => {
  const isNameUsed = state.some(team => team.name === name);
  return [
    ...state,
    {
      name: isNameUsed ? `${name} (${state.length + 1})` : name,
      championships: [],
      rounds: round === null
        ? {}
        : { [round]: [] },
    },
  ];
};

export const removeTeam = (state, { index }) => (
  index > state.length || index < 0
    ? state
    : state.reduce((teams, team, ndx) => (index === ndx ? teams : [...teams, team]), [])
);

export const renameTeam = (state, { index, name }) => (
  index > state.length || index < 0
    ? state
    : [
      ...state.slice(0, index),
      { ...state[index], name },
      ...state.slice(index + 1),
    ]
);

export const addRound = (state, { round }) => (
  state.every(team => Object.keys(team.rounds).includes(round))
    ? state
    : state.map(team => ({
      ...team,
      rounds: {
        ...team.rounds,
        [round]: [],
      },
    }))
);

export const addScores = (state, { round, scores }) => (
  scores.length === 0
    ? state
    : state.map((team, index) => ({
      ...team,
      rounds: {
        ...team.rounds,
        [round]: Number.isNaN(scores[index])
          ? (team.rounds[round] || [])
          : [
            ...(team.rounds[round] || []),
            scores[index],
          ],
      },
    }))
);

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
    case '$':
      return addScores(state, payload);
    default:
      return state;
  }
};
