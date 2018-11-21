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

const flexStyles = {
  flexCenterBetween,
  flexCenterStart,
};

export default flexStyles;
