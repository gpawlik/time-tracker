import { createSelector } from 'reselect';
import { generateCalendar, fillCalendar } from 'helpers/calendar';

const getScheduleDomain = () => state => state.get('scheduleDomain');

const selectSchedule = () => createSelector(
  getScheduleDomain(),
  scheduleState => scheduleState.get('schedule').toJS()
);

const selectCurrentScheduleDate = () => createSelector(
  getScheduleDomain(),
  scheduleState => scheduleState.get('currentScheduleDate')
);

const selectCurrentSchedule = () => createSelector(
  getScheduleDomain(),
  scheduleState => scheduleState.get('currentSchedule').toJS()
);

const selectCalendar = () => createSelector(
  getScheduleDomain(),
  scheduleState => fillCalendar(generateCalendar(), scheduleState.get('schedule').toJS()).toJS()
);

const selectIsLoading = () => createSelector(
  getScheduleDomain(),
  scheduleState => scheduleState.get('isLoading')
);

const selectIsFetched = () => createSelector(
  getScheduleDomain(),
  scheduleState => scheduleState.get('isFetched')
);

export {
  selectSchedule,
  selectCurrentScheduleDate,
  selectCurrentSchedule,
  selectCalendar,
  selectIsLoading,
  selectIsFetched
};

export default getScheduleDomain;
