import moment from 'moment';

import { isWeekDay } from 'helpers/date';
import config from 'config';

export const recent = [{
  key: 'ba',
  name: 'British Airways',
  details: 'Flight Entertainment Platform'
}, {
  key: 'netflix',
  name: 'Netflix',
  details: 'Rating System Project'
}, {
  key: 'tesla-intl',
  name: 'Tesla International',
  details: 'SpaceX Dashboard Design'
}, {
  key: 'nyt',
  name: 'New York Times',
  details: 'Landing Pages Redesign'
}];

const getMock = days => {
  return Array(days).fill(0).reduce((memo, item, index) => {
    const mockDate = moment().subtract(days - index, 'days');
    const projectId = Math.round(Math.random() * 2);

    if (Math.round(Math.random() * 2) === 0 && days - index < 14 || !isWeekDay(mockDate)) {
      return memo;
    }

    memo.push({
      date: mockDate,
      payload: {
        key: recent[projectId].key,
        name: recent[projectId].name,
        details: recent[projectId].details,
        fraction: 1
      }
    });

    return memo;
  }, []);
};

export default {
  data: getMock(config.calendar.daysToMock)
};
