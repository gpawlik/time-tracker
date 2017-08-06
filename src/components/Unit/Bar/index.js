import React from 'react';
import { View } from 'react-native';
import moment from 'moment';

import UnitItem from './../Item';

import s from './style';

export default ({ data, items = 4, onSelect }) => {
  return (
    <View style={s.bar}>
      {Array(items).fill(1).map((item, key) => {
        const itemDate = moment().subtract(items - key - 1, 'days');

        return (
          <UnitItem
            data={data[key]}
            onSelect={() => onSelect(itemDate)}
            date={itemDate}
            key={key}
          />
        );
      })}
    </View>
  );
};
