import React from 'react';
import { Text, View } from 'react-native';

import Month from 'components/Calendar/Month';

import s from './style';

export default ({ calendar, year }) => {
  return (
    <View style={s.box}>
      {Object.keys(calendar[year]).map(key => {
        if(key !== '7') return;
        return <Month month={calendar[year][key]} monthIndex={key} key={key} />;
      })}
    </View>
  );
};
