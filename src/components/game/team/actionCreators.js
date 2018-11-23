export const createTeam = (key, round, name) => ({
  type: 'T+',
  key,
  round,
  name,
});

export const removeTeam = (key, index) => ({
  type: 'T-',
  key,
  index,
});

export const renameTeam = (key, index, name) => ({
  type: 'T=',
  key,
  index,
  name,
});

export const addScores = (key, round, scores) => ({
  type: '$',
  key,
  round,
  scores,
});