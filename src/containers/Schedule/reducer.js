import { fromJS } from 'immutable';
import moment from 'moment';

import { isSameDay } from 'helpers/date';

import { actionTypes as at } from './constants';

const initialState = fromJS({
  schedule: [],
  currentScheduleDate: moment(),
  currentSchedule: [{
    date: moment()
  }],
  isLoading: false,
  isFetched: false
});

// TODO: move away (to selectors?)
const findCurrentSchedule = (state, date) => {
  const schedule = state.get('schedule').filter(item => {
    return isSameDay(item.get('date'), date);
  });

  return schedule.size ? schedule : fromJS([{
    date: moment(date)
  }]);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case at.SCHEDULE_FETCH:
      return state
        .set('isLoading', true)
        .set('isFetched', false);
    case at.SCHEDULE_FETCH_SUCCESS:
      return state
        .set('isLoading', false)
        .set('isFetched', true)
        .set('schedule', fromJS(action.payload));
    case at.SCHEDULE_FETCH_ERROR:
      return state
        .set('isLoading', false)
        .set('isFetched', false)
        .set('schedule', initialState.get('schedule'));
    case at.SCHEDULE_UPDATE:
      return state
        .updateIn(['schedule'], item => item.filter(sItem => {
          return !isSameDay(sItem.get('date'), action.payload.date);
        }).push(fromJS(action.payload)))
        .set('currentSchedule', fromJS([action.payload]));
    case at.SCHEDULE_DATE_UPDATE:
      return state
        .set('currentScheduleDate', action.payload)
        .set('currentSchedule', findCurrentSchedule(state, action.payload));
    default:
      return state;
  }
};
