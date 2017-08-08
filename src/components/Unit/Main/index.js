import React from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';

import { formatDate } from 'helpers/date';
import s from './style';

export default ({ data = [], onPress }) => {
  const unitStyle = data[0].hasOwnProperty('payload') ? s.unitActive : s.unitInActive;

  return (
    <TouchableHighlight
      style={unitStyle}
      onPress={onPress}
      underlayColor={StyleSheet.flatten(unitStyle).backgroundColor}>
      <View>
        <Text style={s.date}>{formatDate(data[0].date)}</Text>
        {data.map((item, key) => {
          if(item.hasOwnProperty('payload')) {
            return (
              <Text style={s.client} key={key}>{item.payload.name}</Text>
            );
          }
        })}
      </View>
    </TouchableHighlight>
  );
};
