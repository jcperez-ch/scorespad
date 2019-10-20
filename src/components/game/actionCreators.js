export const createState = (state) => ({
  type: '-- --',
  ...state,
})

export const createGame = (key, name) => ({
  type: 'G+',
  key,
  name,
})

export const importGame = (key, game) => ({
  type: 'G++',
  key,
  game,
})

export const removeGame = (key) => ({
  type: 'G-',
  key,
})

export const renameGame = (key, name) => ({
  type: 'G=',
  key,
  name,
})

export const endRound = (key, round) => ({
  type: 'G$',
  key,
  round,
})

export const addRound = (key, round) => ({
  type: 'R+',
  key,
  round,
})
