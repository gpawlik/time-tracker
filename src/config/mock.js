import moment from 'moment';

import { isWeekDay } from 'helpers/date';
import config from 'config/clients';

export const recent = [{
  key: 'conde-nast-intl',
  name: 'Condé Nast International',
  details: 'Tugboat Migration Project'
}, {
  key: 'netflix',
  name: 'Netflix',
  details: 'Rating System Project'
}, {
  key: 'tesla-intl',
  name: 'Tesla International',
  details: 'SpaceX Dashboard Design'
}, {
  key: 'mckinsey-sp',
  name: 'McKinsey Co.',
  details: 'Wave Project'
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
