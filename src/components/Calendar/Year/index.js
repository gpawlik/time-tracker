import React from 'react';
import { Text, View } from 'react-native';

import Week from 'components/Calendar/Week';

import s from './style';

export default ({ weeks }) => {
  //const justWeeks = getWeeksFromMonths(months);

  return (
    <View>
      {
        Object.keys(weeks).map(key => {
          //console.log('printing week', justWeeks[key])
          return <Week days={weeks[key]} weekIndex={key} key={key} />;
        })
      }
    </View>
  );
};
