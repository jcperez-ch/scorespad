export const createGame = (key, name) => ({
  type: 'G+',
  key,
  name,
});

export const removeGame = key => ({
  type: 'G-',
  key,
});

export const renameGame = (key, name) => ({
  type: 'G=',
  key,
  name,
});

export const endRound = (key, round) => ({
  type: 'G$',
  key,
  round,
});

export const addRound = (key, round) => ({
  type: 'R+',
  key,
  round,
});
