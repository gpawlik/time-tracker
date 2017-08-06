import { actionTypes as at } from './constants';

export const fetch = () => {
  return {
    type: at.SCHEDULE_FETCH
  };
};

export const fetchSuccess = result => {
  return {
    type: at.SCHEDULE_FETCH_SUCCESS,
    payload: result
  };
};

export const fetchError = error => {
  return {
    type: at.SCHEDULE_FETCH_ERROR,
    payload: error
  };
};

export const updateSchedule = data => {
  return {
    type: at.SCHEDULE_UPDATE,
    payload: data
  };
};

export const updateScheduleDate = date => {
  return {
    type: at.SCHEDULE_DATE_UPDATE,
    payload: date
  };
};
