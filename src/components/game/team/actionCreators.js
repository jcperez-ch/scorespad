export const createTeam = (key, round, name) => ({
  type: 'T+',
  key,
  round,
  name,
})

export const removeTeam = (key, index) => ({
  type: 'T-',
  key,
  index,
})

export const renameTeam = (key, index, name) => ({
  type: 'T=',
  key,
  index,
  name,
})

export const deleteChampionship = (key, round) => ({
  type: 'C-',
  key,
  round,
})
