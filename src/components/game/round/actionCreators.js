export const addScores = (key, round, scores) => ({
  type: 'S++',
  key,
  round,
  scores,
});

export const removeScore = (key, round, index, scoreIndex) => ({
  type: 'S-',
  key,
  round,
  index,
  scoreIndex,
});
