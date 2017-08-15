import mock from 'config/mock';

export const fetchSchedule = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mock.data), 0);
  });
};
