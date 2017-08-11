import React from 'react';
import { View } from 'react-native';
import moment from 'moment';

import UnitItem from './../Item';

import s from './style';

export default ({ calendar, items = 7, onSelect }) => {
  return (
    <View style={s.bar}>
      {Array(items).fill(1).map((item, key) => {
        const itemDate = moment().subtract(items - key - 1, 'days');
        const itemEvents = calendar[itemDate.year()][itemDate.month() + 1][itemDate.week()][itemDate.day()].events;

        return (
          <UnitItem
            itemEvents={itemEvents}
            onSelect={() => onSelect(itemDate)}
            date={itemDate}
            key={key}
          />
        );
      })}
    </View>
  );
};
