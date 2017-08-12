import mock from './mock';

export const fetchSchedule = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mock.data);
    }, 100);
  });
};
