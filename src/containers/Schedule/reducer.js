import { fromJS } from 'immutable';
import moment from 'moment';

import { actionTypes as at } from './constants';

const initialState = fromJS({
  schedule: [],
  currentScheduleDate: moment(),
  currentSchedule: [],
  isLoading: false,
  isFetched: false
});

// TODO: move away (to selectors?)
const findCurrentSchedule = (state, date) => {
  return state.get('schedule').filter(item => {
    return moment(item.get('date')).format('YYYY-MM-DD') === date.format('YYYY-MM-DD');
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case at.SCHEDULE_FETCH:
      return state
        .set('isLoading', true)
        .set('isFetched', false)
        .set('schedule', initialState.get('schedule'))
        .set('currentSchedule', findCurrentSchedule(state, initialState.get('currentScheduleDate')));
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
        .updateIn(['schedule'], item => item.push(fromJS(action.payload)));
    case at.SCHEDULE_DATE_UPDATE:
      return state
        .set('currentScheduleDate', action.payload)
        .set('currentSchedule', findCurrentSchedule(state, action.payload));
    default:
      return state;
  }
};
