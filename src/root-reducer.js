import { combineReducers } from 'redux-immutable';

import scheduleReducer from './containers/Schedule/reducer';

export const state = combineReducers({
  scheduleDomain: scheduleReducer
});
