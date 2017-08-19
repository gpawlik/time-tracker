import React from 'react';
import { ScrollView, View } from 'react-native';
import moment from 'moment';

import ReportLabel from 'components/Report/Label';
import ReportItem from 'components/Report/Item';

import s from './style';

export default ({ calendar, year, page, onNavigate, onScroll }) => {
  const currentYear = calendar[year];
  const startingMonth = Object.keys(currentYear).shift();
  const labelMonth = parseInt(startingMonth, 10) + page;
  const labelMonthName = moment(labelMonth, 'M').format('MMMM');

  return (
    <View>
      <ReportLabel
        month={labelMonthName}
        onPress={onNavigate}
      />
      <ScrollView
        style={s.box}
        onScroll={onScroll}
        horizontal
        pagingEnabled
      >
        {Object.keys(currentYear).map(monthId => {
          return (
            <ReportItem
              month={currentYear[monthId]}
              monthIndex={monthId}
              key={monthId}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
