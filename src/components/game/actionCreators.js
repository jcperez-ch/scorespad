export * from './teams/action.creators';

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
