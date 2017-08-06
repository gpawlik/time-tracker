import { call, put, fork, takeLatest } from 'redux-saga/effects';

import { fetchSchedule } from './service';
import { actionTypes as at } from './constants';
import { fetchSuccess, fetchError } from './actions';

export const fetchScheduleList = function* fetchScheduleList(id) {
  try {
    const result = yield call(fetchSchedule, id);

    yield put(fetchSuccess(result));
  } catch (err) {
    yield put(fetchError(err));
  }
};

export const scheduleWatcher = function* scheduleWatcher() {
  yield fork(takeLatest, at.SCHEDULE_FETCH, fetchScheduleList);
  //yield fork(takeLatest, at.SCHEDULE_UPDATE, updateSchedule);
};
