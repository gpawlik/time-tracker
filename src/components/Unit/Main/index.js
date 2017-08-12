import React from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';

import { formatDate } from 'helpers/date';
import s from './style';

export default ({ data = { payload: {} }, onPress }) => {
  const unitStyle = data.payload.name ? s.unitActive : s.unitInActive;

  return (
    <TouchableHighlight
      style={unitStyle}
      onPress={onPress}
      underlayColor={StyleSheet.flatten(unitStyle).backgroundColor}>
      <View>
        <Text style={s.date}>{formatDate(data.date)}</Text>
        <Text style={s.client}>{data.payload.name}</Text>
      </View>
    </TouchableHighlight>
  );
};
