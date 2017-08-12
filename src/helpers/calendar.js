import moment from 'moment';
import { fromJS, List } from 'immutable';

// eliminate?
export const generateWeeklyCalendar = (initialDate = '2017-07-01T00:00:00.000', endingDate = Date.now()) => {
  const startWeek = moment(initialDate).week();
  const endWeek = moment(endingDate).add(1, 'week').week();

  const calendar = [];

  for(let week = startWeek; week < endWeek; week++) {
    calendar.push({
      week: week,
      days: Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
    });
  }

  return calendar;
};

export const generateCalendar = (initialDate = '2017-03-05T00:00:00.000', endingDate = Date.now()) => {
  const startWeek = moment(initialDate).week();
  const endWeek = moment(endingDate).add(1, 'week').week();
  const days = [];

  for(let week = startWeek; week < endWeek; week++) {
    Array(7).fill(0).map((n, i) => {
      days.push(moment().week(week).startOf('week').clone().add(n + i, 'day'));
    });
  }

  // TODO: compare performance with vanilla JS
  return days.reduce((memo, day) => {
    return memo.setIn([
      day.year(),
      day.month() + 1,
      day.week(),
      day.day(),
      'moment'
    ], day);
  }, fromJS({}));
};

export const fillCalendar = (calendar, events) => {
  return events.reduce((memo, { date, payload }) => {
    return memo.updateIn([
      moment(date).year(),
      moment(date).month() + 1,
      moment(date).week(),
      moment(date).day(),
      'events'
    ], list => {
      if(list) {
        return list.push(payload);
      } else {
        return new List([payload]);
      }
    });
  }, calendar);
};
