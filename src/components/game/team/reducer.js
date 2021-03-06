import { get } from 'lodash'

const reduceTeam = (state, { index, ...payload }, reduceFunction) => {
  if (index > state.length || index < 0) {
    return state
  }
  const reducedTeam = reduceFunction(state[index], payload)
  return reducedTeam === state[index] ? state : state.map((team, i) => (index === i ? reducedTeam : team))
}

export const createTeam = (state, { name, round }) => {
  const isNameUsed = state.some((team) => team.name === name)
  return [
    ...state,
    {
      name: isNameUsed ? `${name} (${state.length + 1})` : name,
      championships: [],
      rounds: round === null ? {} : { [round]: [] },
    },
  ]
}

export const removeTeam = (state, { index }) => (index > state.length || index < 0 ? state : state.filter((_, i) => index !== i))

export const renameTeam = (team, { name }) => (team.name === name ? team : { ...team, name })

export const addRound = (state, { round }) =>
  state.every((team) => Object.keys(team.rounds).includes(round))
    ? state
    : state.map((team) => ({
        ...team,
        rounds: {
          ...team.rounds,
          [round]: [],
        },
      }))

export const addChampionship = (state, { index, round }) =>
  index > state.length || index < 0
    ? state
    : state.map((team, i) =>
        i === index
          ? {
              ...team,
              championships: [...team.championships, round],
            }
          : team)

export const removeScore = (team, { round, scoreIndex }) =>
  get(team.rounds, `${round}.${scoreIndex}`) === undefined
    ? team
    : {
        ...team,
        rounds: {
          ...team.rounds,
          [round]: team.rounds[round].filter((_, i) => i !== scoreIndex),
        },
      }

export const addScores = (state, { round, scores }) =>
  scores.length === 0
    ? state
    : state.map((team, index) => ({
        ...team,
        rounds: {
          ...team.rounds,
          [round]: typeof scores[index] !== 'number' || Number.isNaN(scores[index]) ? team.rounds[round] || [] : [...(team.rounds[round] || []), scores[index]],
        },
      }))

export const reducer = (state = [], { type, ...payload }) => {
  switch (type) {
    case 'T+':
      return createTeam(state, payload)
    case 'T-':
      return removeTeam(state, payload)
    case 'T=':
      return reduceTeam(state, payload, renameTeam)
    case 'R+':
      return addRound(state, payload)
    case 'S++':
      return addScores(state, payload)
    case 'S-':
      return reduceTeam(state, payload, removeScore)
    case 'C+':
      return addChampionship(state, payload)
    default:
      return state
  }
}
