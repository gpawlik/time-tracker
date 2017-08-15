import { fromJS } from 'immutable';
import moment from 'moment';

import { isSameDay } from 'helpers/date';

export const findCurrentSchedule = (schedule, date) => {
  const currentSchedule = schedule.find(item => {
    return isSameDay(item.get('date'), date);
  });

  return currentSchedule || fromJS({
    date: moment(date),
    payload: {}
  });
};

export const insertIntoSchedule = (schedule, currentSchedule) => {
  return schedule.filter(item => {
    return !isSameDay(item.get('date'), currentSchedule.get('date'));
  }).push(currentSchedule);
};
