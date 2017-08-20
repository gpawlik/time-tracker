import moment from 'moment';
import { List, Map } from 'immutable';

import config from 'config';

export const generateCalendar = (initialDate = config.calendar.initialDate, endingDate = Date.now()) => {
  const startingWeek = moment(initialDate).week();
  const endingWeek = moment(endingDate).add(1, 'week').week();
  const days = [];

  for(let week = startingWeek; week < endingWeek; week++) {
    Array(7).fill(0).map((n, i) => {
      days.push(moment().week(week).startOf('week').clone().add(n + i, 'day'));
    });
  }

  return days.reduce((memo, day) => {
    return memo.setIn([
      day.year(),
      day.month() + 1,
      day.week(),
      day.day(),
      'moment'
    ], day);
  }, new List());
};

export const fillCalendar = (calendar, events) => {
  return events.reduce((memo, { date, payload }) => {
    return memo.setIn([
      moment(date).year(),
      moment(date).month() + 1,
      moment(date).week(),
      moment(date).day(),
      'event'
    ], new Map(payload));
  }, calendar);
};

export const insertIntoCalendar = (calendar, event) => {
  const date = event.get('date');
  const payload = event.get('payload');

  return calendar.setIn([
    moment(date).year(),
    moment(date).month() + 1,
    moment(date).week(),
    moment(date).day(),
    'event'
  ], new Map(payload));
};
