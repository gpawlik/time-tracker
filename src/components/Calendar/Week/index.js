import React from 'react';
import { Text, View } from 'react-native';

import Item from 'components/Report/Item';

import s from './style';

export default ({ days = {}, weekIndex }) => {
  return (
    <View style={s.container}>
      <Text>Week: {weekIndex}</Text>
      {
        Object.keys(days).map(key => {
          return <Item data={days[key]} key={key} />;
        })
      }
      <Text style={s.summary}>Week summary:</Text>
    </View>
  );
};
