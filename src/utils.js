import { noop } from 'lodash';

const handleEnter = (cb, next = noop) => (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    cb();
  }
  next();
};

export const handlers = {
  onEnter: handleEnter,
};

const flexRow = {
  display: 'flex',
  flexDirection: 'row',
};

export const flexStyles = {
  flexCenterBetween: {
    ...flexRow,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexCenterStart: {
    ...flexRow,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
};
