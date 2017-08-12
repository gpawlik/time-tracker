import React from 'react';
import { ScrollView, View } from 'react-native';
import moment from 'moment';

import ReportLabel from 'components/Report/ReportLabel';
import Month from 'components/Calendar/Month';

import s from './style';

export default ({ calendar, year, page, onNavigate, onScroll }) => {
  const startingMonth = Object.keys(calendar[year]).shift();
  const labelMonth = parseInt(startingMonth, 10) + page;
  const labelMonthName = moment(labelMonth, 'M').format('MMMM');

  return (
    <View>
      <ReportLabel month={labelMonthName} onPress={onNavigate} />
      <ScrollView style={s.box} onScroll={onScroll} horizontal pagingEnabled>
        {Object.keys(calendar[year]).map(key => {
          //if(key !== '7') return;
          return <Month month={calendar[year][key]} monthIndex={key} key={key} />;
        })}
      </ScrollView>
    </View>
  );
};
