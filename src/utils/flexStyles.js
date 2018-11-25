export const flexRow = {
  display: 'flex',
  flexDirection: 'row',
};

export const flexCenterBetween = {
  ...flexRow,
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const flexCenterStart = {
  ...flexRow,
  alignItems: 'center',
  justifyContent: 'flex-start',
};

export const flexCenterWrap = {
  ...flexRow,
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
};

const flexStyles = {
  flexCenterBetween,
  flexCenterStart,
  flexCenterWrap,
};

export default flexStyles;
